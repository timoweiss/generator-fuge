'use strict';

var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      var opts = {
        name: this.options.name || 'NAME_ME'
      };
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        opts
      );
      this.fs.copyTpl(
        this.templatePath('_host.js'),
        this.destinationPath('host.js'),
        opts
      );
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_Dockerfile'),
        this.destinationPath('Dockerfile')
      );
      this.fs.copy(
        this.templatePath('_jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('_istanbul.yml'),
        this.destinationPath('.istanbul.yml')
      );
      this.fs.copy(
        this.templatePath('_gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});

