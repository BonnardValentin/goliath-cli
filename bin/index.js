#!/usr/bin/env node

const { Command } = require("commander");
const ora = require("ora");

// Private libs
const package = require("../package.json");
const { checkDirectoryAccess } = require("./actions/files");
const { generateFilesProject } = require("./command/nestjs/generate");
const installDependencies = require('./command/nestjs/install')

const program = new Command();

program
  .version(package.version, "-v, --version", "version of the cli")
  .description("A CLI for generating NestJS or Rust projects")
  .option("-t, --template <engine>", "specify template engine", "nestjs")
  .option("-d, --deploy <system>", "specify template engine", "terraform")
  .requiredOption("-n, --name <name>", "specify a project name")
  .action(() => {
    const options = program.opts();
    switch (options.template) {
      case "nestjs":
        {
          const creationFilesSpinner = ora(
            `Creating project files for template ${options.template}...`
          ).start();

          const projectPath = `${process.cwd()}/${options.name}`;
          checkDirectoryAccess(projectPath);
          generateFilesProject(projectPath, options.name);
          creationFilesSpinner.succeed("Project files created successfully!");

          const spinner = ora("Installing dependencies...").start();
          installDependencies(projectPath)
            .then(() => {
              spinner.succeed("Dependencies installed successfully");
            })
            .catch((error) => {
              spinner.fail("Failed to install dependencies");
              console.error(error);
              process.exit(1);
            });
        }
        break;

      case "rust": {
        console.log("Nill");
      }
    }
  });

program.parse();
