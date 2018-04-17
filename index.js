
'use strict';

// modify console command char style
const chalk = require('chalk');

const commander = require('commander');

// const envinfo = require('envinfo');

// with starter.js
import envinfo from 'envinfo';

import { helpers } from 'envinfo';

const packageJson = require('./package.json');

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .option('--verbose', 'print additional logs')
  .option('--info', 'print environment debug info')
  .allowUnknownOption()
  .on('--help', () => {
    console.log(`    - a specific npm version: ${chalk.green('0.8.2')}`);
  })

  .parse(process.argv)
  ;

// projectName validation
if (typeof projectName === 'undefined') {
  if (program.info) {
    envinfo.print(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'npm'],
        npmPackages: ['mibo']
      },
      { json: true }
    );

    //console.log(env);  // envinfo 5.1.2 : envinfo.run() -> Promise { <pending> }

    //const OS = helpers.getOSInfo();

    //console.log({ OS })

    process.exit(0);
  }

  console.error('Please specify the project directory:');

  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );

  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-mibo-app')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  )
}


// var fs = require("fs")

// var mkdir = ['css', 'fonts', 'img', 'module']

// var len = mkdir.length;

// for (var i = 0; i < len; i++) {
//   fs.mkdir(mkdir[i], function (err) {
//     if (err) {
//       return console.error(err);
//     }
//   })
// }



