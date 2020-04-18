"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const pluralize = require("pluralize");

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Let's add a new entity`));

    this.answers = await this.prompt([
      {
        type: "input",
        name: "entityName",
        message: "Your entity name",
        default: undefined
      }
    ]);
    this.answers.entityCollection = pluralize(this.answers.entityName);

    this.log({ answers: this.answers });
  }

  writing() {}

  install() {}
};
