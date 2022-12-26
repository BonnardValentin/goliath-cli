const files = require('./files');
const inquirer = require('inquirer');

module.exports = {
    generateProject: async () => {
        const { projectPath } = await inquirer.prompt([
            {
                name: 'projectPath',
                message: 'Enter the directory path to create the project in:',
                validate: async (input) => {
                    if (await files.checkDirectoryAccess(input)) {
                        return true;
                    }
                    return 'Please enter a valid directory path with read and write permissions';
                },
            },
        ]);
        return projectPath;
    }
}