"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the cool ${chalk.red("generator-tataki-api")} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname
      },
      {
        type: "confirm",
        name: "isGithubActionsEnabled",
        message: "Would you like to enable the Github actions integration?",
        default: true
      },
      {
        type: "list",
        name: "packageManager",
        choices: ["npm", "yarn"],
        message: "Which package manager do you want?",
        default: true
      }
    ]);

    this.log({ answers: this.answers });
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    if (this.answers.packageManager === "yarn") {
      this.yarnInstall();
    } else {
      this.npmInstall();
    }
  }
};
