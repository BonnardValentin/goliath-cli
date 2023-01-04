const nestCliTemplate = `
{
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
      "webpack": false,
      "assets": [
        "**/assets/*"
      ],
      "deleteOutDir": true
    }
  }
`
module.exports = nestCliTemplate;