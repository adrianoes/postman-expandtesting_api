const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const filterName = process.argv[2];
const withXml = process.argv.includes('--with-xml');

if (!filterName || filterName === '--with-xml') {
    console.error('❌ Uso: node run-filtered-tests.js "<padrão>" [--with-xml]');
    console.error('   Exemplos:');
    console.error('   node run-filtered-tests.js "TC001"        # apenas teste TC001');
    console.error('   node run-filtered-tests.js "TC002|TC004"  # múltiplos números');
    console.error('   node run-filtered-tests.js "negative"     # por tag');
    console.error('   node run-filtered-tests.js "br" --with-xml # com XML para JIRA');
    process.exit(1);
}

try {
    const collectionPath = path.join(__dirname, 'expandtesting.json');
    const collection = JSON.parse(fs.readFileSync(collectionPath, 'utf8'));

    // Se o padrão contém apenas números/pipes/pontos, ancora no início
    let pattern = filterName;
    if (/^[\d|.]+$/.test(filterName)) {
        pattern = `^(${filterName})`;
    }

    const regex = new RegExp(pattern, 'i');
    const filteredItems = collection.item.filter(item => regex.test(item.name));

    if (filteredItems.length === 0) {
        console.error(`❌ Nenhum teste encontrado com o padrão: "${filterName}"`);
        console.log('\n📋 Testes disponíveis:');
        collection.item.forEach(item => console.log(`   - ${item.name}`));
        process.exit(1);
    }

    const tempCollection = { ...collection, item: filteredItems };
    const tempPath = path.join(__dirname, '.temp-collection.json');

    fs.writeFileSync(tempPath, JSON.stringify(tempCollection, null, 2));

    console.log(`\n🔍 Executando ${filteredItems.length} teste(s) com padrão: "${filterName}"\n`);
    filteredItems.forEach(item => console.log(`   ✓ ${item.name}`));
    console.log('');

    const reporters = withXml ? 'cli,htmlextra,junit' : 'cli,htmlextra';
    const reporterArgs = withXml 
        ? '--reporter-htmlextra-export ./results/report.html --reporter-junit-export ./results/report.xml'
        : '--reporter-htmlextra-export ./results/report.html';

    try {
        execSync(
            `newman run "${tempPath}" --environment ./expandtesting_env.json -r ${reporters} ${reporterArgs} --delay-request 1000 --disable-unicode`,
            { stdio: 'inherit', windowsHide: false }
        );
    } catch (error) {
        // Newman retorna exit code 1 quando há falhas nos testes, mas o relatório ainda é gerado
        // Ignoramos o erro aqui pois o relatório já foi criado
    } finally {
        fs.unlinkSync(tempPath);
    }
} catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
}
