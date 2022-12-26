const fs = require('fs').promises;
const ora = require('ora')

module.exports = {
    checkDirectoryAccess: async (path) => {
        try {
            await fs.access(path, constants.R_OK | constants.W_OK);
        } catch (error) {
            const spinner = ora('Creating project files...').start();
            try {
                await fs.mkdir(path, { recursive: true });
                spinner.succeed('Project files created successfully!');
            } catch (error) {
                spinner.fail(error.message);
                return false;
            }
        }
        return true;
    }
}