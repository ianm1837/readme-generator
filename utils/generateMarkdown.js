// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

	} else if (license === 'Apache') {
		return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

	} else if (license === 'GPL2') {
		return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

	} else if (license === 'GPL3') {
		return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

	} else {
		return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === 'MIT') {
		return 'https://opensource.org/licenses/MIT'

	} else if (license === 'Apache') {
		return 'https://opensource.org/licenses/Apache-2.0'

	} else if (license === 'GPL2') {
		return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'

	} else if (license === 'GPL3') {
		return 'https://www.gnu.org/licenses/gpl-3.0'

	} else {
		return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === 'MIT') {
		return 'Licensed under the MIT license.'

	} else if (license === 'Apache') {
		return 'Licensed under the Apache license.'

	} else if (license === 'GPL2') {
		return 'Licensed under the GPL2 license.'

	} else if (license === 'GPL3') {
		return 'Licensed under the GPL3 license.'

	} else {
		return '';
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
