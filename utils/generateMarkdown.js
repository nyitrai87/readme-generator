// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation !== '' ? data.installation : 'N/A'}

  ## Usage
  ${data.usage !== '' ? data.usage : 'N/A'}

  ## License
  This project is covered under the ${data.license} license.

  ## Contributing
  ${data.contributing !== '' ? data.contributing : 'N/A'}

  ## Tests
  ${data.tests !== '' ? data.tests : 'N/A'}

  ## Questions
  If you have any further question, please feel free to contact me by email: [${data.email}](mailto:${data.email})
  
  If you would like to check my other projects, please visit my GitHub profile: [https://github.com/${data.github}](https://github.com/${data.github}).`;
}

module.exports = generateMarkdown;