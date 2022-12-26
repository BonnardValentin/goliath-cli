#! /usr/bin/env node


/**
 *  External library
 */
const figlet = require('figlet');
const chalk = require('chalk');
const commander = require('commander');

/**
 *  Own library
 */
const pjson = require('./package.json');
const cli = require('./libs/program')

console.log(
    chalk.red(
        figlet.textSync('Goliath Cli', { horizontalLayout: 'full' })
    )
);

const program = new commander.Command();

program
    .version(pjson.version)
    .description("A CLI to generate a template of microservice")
    .option("-c, --create", "Create microservice from clean architecture")
    .parse(process.argv);

const options = program.opts();

if (options.create) {
    cli.generateProject();
}

if (!process.argv.slice(2).length) {
    program.outputHelp();
}