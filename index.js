const inquirer = require("inquirer");
const fs = require("fs");

function writeReadMe(
  name,
  description,
  install,
  usage,
  license,
  contribution,
  test,
  github,
  email
) {
  switch (license) {
    case "Apache":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    /* case "BSD 2-Clause":
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "BSD 3-Clause":
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;*/
    case "GNU":
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    /*case "GNU GPLv2.0":
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;*/
    case "GPL":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozilla":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      break;
  }

  const readMeFile = `# ${name}

  ${licenseBadge}
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Test](#test)
  * [Questions](#questions)
  #
  ## Description
  ${description}
  #
  ## Installation
  ${install}
  #
  ## Usage
  ${usage}
  #
  ## Contributions
  ${contribution}
  #
  ## Test
  ${test}
  #
  ## License
  ${licenseBadge}
  #
  ## Questions
  Check out my GitHub for more projects:  (https://github.com/${github})


  Please send me an email with any questions or comments:  ${email}
   `;
  fs.writeFile("README.md", readMeFile, (err) =>
    err ? console.log(err) : console.log("README.md has been created!")
  );
}
const confirmInput = async (input) => {
  if (input) {
    return true;
  } else {
    return "Please type an answer to continue";
  }
};
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "name",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "Write a description of your project:",
      name: "description",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "How do you install the project?",
      name: "install",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "How do you use it?",
      name: "usage",
      validate: confirmInput,
    },
    {
      type: "list",
      message: "What license did you use?",
      choices: ["MIT", "GPL", "Apache", "GNU", "Mozilla", "N/A"],
      name: "license",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "Who contributed to the project?",
      name: "contribution",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test",
      validate: confirmInput,
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
      validate: confirmInput,
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: confirmInput,
    },
  ])

  .then((response) => {
    console.log(response);
    writeReadMe(
      response.name,
      response.description,
      response.install,
      response.usage,
      response.license,
      response.contribution,
      response.test,
      response.github,
      response.email
    );
  });
