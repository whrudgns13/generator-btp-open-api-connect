'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the CY Platform DS Team ${chalk.red('Btp open api connect template!')}`
      )
    );

    const prompts = [
      {
        name: 'domain',
        message: 'Your Subaccount domain',
      },
      {
        name: 'region',
        message: 'Your Subaccount Region',
        default: 'us10'
      },
      {
        name: 'serverNameSpace',
        message: 'Your Server name?',
        default: "cyglobal"
      },
      {
        name: 'appNameSpace',
        message: 'Your application name?',
        default: "ui5"
      },
      {
        name: 'ui5ProjectName',
        message: 'Your ui5 project name?',
        default: "myUI5App"
      },
      {
        name: 'ui5Namespace',
        message: 'Which namespace do you want to use?',
        default: "com.myorg"
      },
      {
        name: 'approuterName',
        message: 'Your approuter name?',
        default: "approuter"
      },
      {
        name: 'xsuaaName',
        message: 'Your xsuaa sevice name?',
        default: "Node_security"
      },
    ];

    //props로 값이 담겨옴 prompts의 name으로 접근 this.props.name
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('srv'),this.destinationPath('srv'));
    this.fs.copy(this.templatePath('approuter'),this.destinationPath('approuter'));
    this.fs.copyTpl(
      this.templatePath('security'),
      this.destinationPath('security'),
      {xsuaaName : this.props.xsuaaName}
    );
    this.fs.copyTpl(
      this.templatePath('web'),
      this.destinationPath('web'),
      {
        ui5ProjectName : this.props.ui5ProjectName,
        ui5Namespace : this.props.ui5Namespace
      }
    );
    this.fs.copyTpl(
      this.templatePath('manifest.yaml'),
      this.destinationPath('manifest.yaml'),
      {
        domain : this.props.domain,
        region : this.props.region,
        serverNameSpace : this.props.serverNameSpace,
        appNameSpace : this.props.appNameSpace,
        xsuaaName : this.props.xsuaaName,
        approuterName : this.props.approuterName
      },
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false
    });
  }
};
