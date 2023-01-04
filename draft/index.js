const mainTemplate = `
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
`;

const packageTemplate = require("./package.template");
const {
  tsConfigBuildTemplate,
  tsConfigTemplate,
} = require("./ts-config.template");
const {
  editorConfig,
  eslintConfig,
  npmrcConfig,
  prettierConfig,
} = require("./config.template");
const nestCliTemplate = require("./nest-cli.template");
const jestSetupTemplate = require("./jest-setup.template");
const azureTemplate = require("./azure.template");

module.exports = {
  main: mainTemplate,
  tsConfigTemplate,
  tsConfigBuildTemplate,
  packageTemplate,
  nestCliTemplate,
  jestSetupTemplate,
  azureTemplate,
  editorConfig,
  eslintConfig,
  npmrcConfig,
  prettierConfig,
};
