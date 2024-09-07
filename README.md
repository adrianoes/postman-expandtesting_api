# postman-expandtesting_API

API testing in [expandtesting](https://practice.expandtesting.com/notes/api/api-docs/). This project contains basic examples on how to use Postman to test API. All the necessary support documentation to develop this project is placed here.

# Pre-requirements:

| Requirement                     | Version        | Note                                                            |
| :------------------------------ |:---------------| :-------------------------------------------------------------- |
| Node.js                         | 18.18.0        | -                                                               |
| Postman                         | 11.11          | -                                                               |
| Newman                          | 6.2.1          | -                                                               |
| newman-reporter-htmlextra       | 1.23.1         | -                                                               |
             
# Installation:

- See [Node.js page](https://nodejs.org/en) and install the aforementioned Node.js version. Keep all the preferenced options as they are.
- See [Postman page](https://www.postman.com/downloads/) and download Postman. When installing it, keep all the preferenced options as they are. Click in "Allow" when windows firewall pops up. See [Sign in to Postman](https://identity.getpostman.com/) page to sign in.
- Open the project folder in terminal and execute ```npm install -g newman``` to install Newman.
- Open the project folder in terminal  ```npm install -g newman-reporter-htmlextra``` to install newman-reporter-htmlextra.
- In Postman:
  - Hover the mouse on collection name and hit :point_right:**...** button, then hit :point_right:**Export** button to export the collection as a .json file to the project directory. 
  - Hit :point_right:**Environment quick look**, hit :point_right:**Edit** and hit :point_right:**Export** to export the global variables file as a .json file in the same directory as the collection. 

# Tests:

- Load expandtesting_ci.json and expandtesting_globals.json files on Postman and send the requests.
- Execute ```newman run ./expandtesting_ci.json -g ./expandtesting_globals.json -r htmlextra --reporter-htmlextra-export ./results/report.html``` to run the collection via command line and store the report inside results folder inside project directory.
- Execute ```newman run ./expandtesting_ci.json -g ./expandtesting_globals.json``` to run the collection via command line and have the results on terminal.

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
- [Newman page](https://www.npmjs.com/package/newman)
- [newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)

# Tips:

- UI and API tests to send password reset link to user's email and API tests to verify a password reset token and reset a user's password must be tested manually as they rely on e-mail verification.

