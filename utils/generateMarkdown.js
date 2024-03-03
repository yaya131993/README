
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

# Description
${data.Description}

# Content
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)

# Installation
The following must be installed for the application to run:
${data.Installation}

# Usage
To use the app:
 ${data.Usage}

# Contributors
Contributors: ${data.Contributors}

# Test
This is needed to run a test: 
${data.Test}

# GitHub
${data.GitHub}

# Email
${data.Email}
`
}

module.exports = generateMarkdown;
