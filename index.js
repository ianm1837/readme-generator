// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
		{
			type: 'input',
			name: 'title',
			message: 'Enter the name of your project.',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter a description for your project.',
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Please provide installation instructions for your project.',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Please provide usage information for your project.',
		},
		{
			type: 'list',
			name: 'license',
			message: 'Please select a license for your project.',
			choices: ['MIT', 'Apache', 'GPL3', 'GPL2', 'None'],
		},
		{
			type: 'input',
			name: 'contribution',
			message: 'Please provide contribution guidelines for your project.',
		},
		{
			type: 'input',
			name: 'test',
			message: 'Please provide test instructions for your project.',
		},
		{
			type: 'input',
			name: 'github',
			message: 'Please provide your GitHub username.',
		},
		{
			type: 'input',
			name: 'email',
			message: 'Please provide your email address.',
		}
];

// Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile	(fileName,	data,	(err)	=>	{
		if	(err)	{
			return	console.log(err);
		}
		console.log('README has been genrated and placed in the generated_readme folder.');
	}
	);
}

// Create a function to initialize app
function init() {
	inquirer.prompt(questions)
	.then((data) => {
		writeToFile('./generated_readme/README.md', generateMarkdown(data));
	});
}

// Function call to initialize app
init();
