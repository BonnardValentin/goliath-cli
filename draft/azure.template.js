let runAnalyse = `{ parameters.runAnalyse }`;
let runMigration = `{ parameters.runMigration }`;

const azureTemplate = `
parameters:
  - name: runMigration
    type: boolean
    displayName: 'Run "migration" stage for this build (check for yes) ?'
    default: false
  - name: runAnalyse
    type: boolean
    displayName: 'Run "analyse" stage for this build (check for yes) ?'
    default: false
pool:
  vmImage: 'ubuntu-20.04'
resources:
  repositories:
    - repository: devops
      type: git
      name: total-services/devops
extends:
  template: pipelines/nestjs-api/nestjs.yaml@devops
  parameters:
    application: api-salesforce
    runMigration: ${runMigration}
    runAnalyse: ${runAnalyse}
trigger:
  branches:
    include:
      - master
      - develop
      - release
      - sandbox
`;

module.exports = azureTemplate;
