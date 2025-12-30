const { execSync } = require('child_process');

const pattern = process.argv[2];

if (!pattern) {
    console.error('❌ Uso: npm run filter:jira -- "<padrão>"');
    console.error('   Exemplo: npm run filter:jira -- "TC001|TC002"');
    process.exit(1);
}

try {
    console.log(`\n🔍 Executando testes filtrados com JIRA: "${pattern}"\n`);
    
    // Executa testes filtrados com XML
    execSync(`node run-filtered-tests.js "${pattern}" --with-xml`, { stdio: 'inherit' });
    
    // Executa JIRA reporter
    console.log('\n📊 Gerando issues no JIRA...\n');
    execSync('node jira-reporter.js', { stdio: 'inherit' });
    
} catch (error) {
    console.error('❌ Erro na execução:', error.message);
    process.exit(1);
}
