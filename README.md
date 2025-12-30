# postman-expandtesting_api

API testing in [expandtesting](https://practice.expandtesting.com/notes/api/api-docs/). This project contains basic examples on how to use Postman to test API. All the necessary support documentation to develop this project is placed here.

# Pre-requirements:

| Requirement                     | Version        | Note                                                            |
| :------------------------------ |:---------------| :-------------------------------------------------------------- |
| Node.js                         | 18.18.0        | JavaScript runtime environment                                  |
| Postman                         | 11.11          | API testing tool (optional, for GUI testing)                    |
| Newman                          | 6.2.1          | Command-line collection runner for Postman                      |
| newman-reporter-htmlextra       | 1.23.1         | HTML reporter for Newman with enhanced features                 |
| axios                           | 1.6.2          | Promise-based HTTP client (for JIRA integration)                |
| dotenv                          | 16.3.1         | Environment variable loader (for JIRA credentials)              |
| form-data                       | 4.0.0          | Multipart form data handling (for file attachments)             |
| xml2js                          | 0.6.2          | XML to JavaScript parser (for test report analysis)             |
             
# Installation:

- See [Node.js page](https://nodejs.org/en) and install the aforementioned Node.js version. Keep all the preferenced options as they are.
- See [Postman page](https://www.postman.com/downloads/) and download Postman. When installing it, keep all the preferenced options as they are. Click in "Allow" when windows firewall pops up. See [Sign in to Postman](https://identity.getpostman.com/) page to sign in.
- Open the project folder in terminal and execute ```npm install -g newman``` to install Newman globally.
- Open the project folder in terminal and execute ```npm install -g newman-reporter-htmlextra``` to install newman-reporter-htmlextra globally.
- Open the project folder in terminal and execute ```npm install xml2js``` to install xml2js for XML parsing.
- Open the project folder in terminal and execute ```npm install axios``` to install axios for HTTP requests.
- Open the project folder in terminal and execute ```npm install dotenv``` to install dotenv for environment variable management.
- Open the project folder in terminal and execute ```npm install form-data``` to install form-data for file uploads.
- In Postman:
  - Hover the mouse on collection name and hit :point_right:**...** button, then hit :point_right:**Export** button to export the collection as a .json file to the project directory. 
  - Hit :point_right:**Environment quick look**, hit :point_right:**Edit** and hit :point_right:**Export** to export the environment variables file as a .json file in the same directory as the collection. 

# Tests:

- Execute ```npm test``` to run all tests and display results in terminal.
- Execute ```npm run test:report``` to run all tests and generate XML/HTML reports in results/ folder.
- Execute ```npm run test:jira``` to run all tests, generate reports (HTML/XML in results/), and automatically create JIRA issues if any tests fail.
- Execute ```npm run test:filter "TC001"``` to run only test TC001 (health check) and generate reports.
- Execute ```npm run test:filter "TC002"``` to run only test TC002 (create user) and generate reports.
- Execute ```npm run test:filter "TC002|TC004"``` to run tests TC002 and TC004 and generate reports.
- Execute ```npm run test:filter "negative"``` to run all negative tests (bad request + unauthorized) and generate reports.
- Execute ```npm run test:filter "br"``` to run all bad request tests and generate reports.
- Execute ```npm run test:filter "ur"``` to run all unauthorized request tests and generate reports.
- Execute ```npm run test:filter "login"``` to run all tests containing "login" in the name and generate reports.
- Execute ```npm run test:filter "note"``` to run all tests containing "note" in the name and generate reports.
- Execute ```npm run filter:jira -- "TC001|TC002"``` to run filtered tests with JIRA integration (note the -- separator).
- Execute ```npm run filter:jira -- "negative"``` to run all negative tests and create JIRA issues if failures occur.
- Execute ```npm run jira:report``` to manually create a JIRA issue from the last test results (if failures exist).
- Execute ```newman run ./expandtesting.json --environment ./expandtesting_env.json``` to run the collection with environment variables.
- Execute ```newman run ./expandtesting.json --environment ./expandtesting_env.json -r htmlextra --reporter-htmlextra-export ./results/report.html``` to run all tests and generate an HTML report in results/ folder.
- Load expandtesting.json and expandtesting_env.json files on Postman and send the requests.

# Support:

- [expandtesting API documentation page](https://practice.expandtesting.com/notes/api/api-docs/)
- [expandtesting API demonstration page](https://www.youtube.com/watch?v=bQYvS6EEBZc)
- [How can I access Request object in PostMan](https://stackoverflow.com/a/75261021/10519428)
- [Use dynamic variables to return randomly generated data](https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/)
- [Postman how to set body data value as random element defined in array](https://stackoverflow.com/a/64763988/10519428)
- [Postman random digit inside a range](https://stackoverflow.com/q/64763829/10519428)
- [If statement in pre-request script](https://community.postman.com/t/if-statement-in-pre-request-script/39355/2)
- [Global variables undefined in pre-request script](https://community.postman.com/t/global-variables-undefined-in-pre-request-script/21685/4)
- [Postman getting random UserName inside Pre-Request Scripts](https://stackoverflow.com/a/60569258/10519428)
- [How to ignore upper or lower case in a pm.response](https://community.postman.com/t/how-to-ignore-upper-or-lower-case-in-a-pm-response/36416/3)
- [Assert over a dynamic boolean](https://community.postman.com/t/assert-over-a-dynamic-boolean/39137/5)
- [Newman](https://www.npmjs.com/package/newman)
- [newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)
- [xml2js](https://www.npmjs.com/package/xml2js)
- [axios](https://axios-http.com/docs/intro)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [form-data](https://www.npmjs.com/package/form-data)

# Tips:

- UI and API tests to send password reset link to user's email and API tests to verify a password reset token and reset a user's password must be tested manually as they rely on e-mail verification.
- This project automatically creates JIRA bug issues when test failures are detected. If all tests pass, no JIRA issue is created. If any test fails, a detailed JIRA issue is automatically created.
- Newman is a command-line collection runner for Postman that enables automated test execution, CI/CD integration, and scheduled runs without needing the Postman GUI.
- xml2js is used to parse XML report files generated by Newman and convert them to JavaScript objects for JIRA integration and test result analysis.
- axios is a HTTP client library used to make REST API calls to JIRA for creating issues automatically when test failures are detected.
- dotenv loads environment variables from .env file to manage JIRA credentials securely without exposing them in the source code.
- form-data creates multipart/form-data streams for file uploads, used to attach HTML and XML report files to JIRA issues.

