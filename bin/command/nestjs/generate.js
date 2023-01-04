const { createFile } = require('../../actions/files');
const templatePackageJson  = require('../../templates/index');

const generateFilesProject = (path, nameProject) => {
    createFile(`${path}/package.json`, JSON.stringify(templatePackageJson(nameProject)));
}

module.exports = {
    generateFilesProject
}