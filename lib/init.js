const path = require('path');
const { execSync, exec, spawn } = require('child_process');
const clc = require('cli-color');

function init(config) {
  return function(options) {
    const projectName = options.argv[0];
    const cobaltContainerPath = path.join(process.cwd(), projectName);
    const cobaltConfigPath = path.join(cobaltContainerPath, 'cobalt')
    const projectPath = path.join(cobaltContainerPath, config.SAVE_ROOT);
    const clientPath = path.join(projectPath, 'client');

    function createFiles() {
      config.SAVE_ROOT = path.join(projectName, config.SAVE_ROOT);
      const generate = config.COMMANDS.generate;
      generate.navbar({
        argv: ['Main'],
        css: 'less',
      });
      generate.layout({
        argv: ['Main'],
        css: 'less',
      });
      generate.page({
        argv: ['Home'],
        action: 'index',
        css: 'less',
      });
    }

    function createMeteorApp() {
      console.log(clc.yellow(`Creating meteor app: ${projectName}...`));
      execSync(`mkdir ${cobaltContainerPath}`);
      execSync(`mkdir ${cobaltConfigPath}`);
      execSync(`mkdir ${projectPath}`);
      execSync(`meteor create ${config.SAVE_ROOT}`, {cwd: cobaltContainerPath});
      console.log(clc.green(`Meteor app created!`));
    }

    function installNpmDeps() {
      console.log(clc.yellow(`Installing npm dependencies...`));
      execSync('meteor npm install', {cwd: projectPath});
      execSync('meteor npm install --save react react-dom react-addons-pure-render-mixin react-mounter react-bootstrap', {cwd: projectPath});
      console.log(clc.green(`npm dependencies installed!`));
    }

    function installMeteorDeps() {
      console.log(clc.yellow(`Installing meteor dependencies...`));
      execSync('meteor add react-meteor-data twbs:bootstrap aldeed:simple-schema aldeed:collection2 kadira:flow-router', {cwd: projectPath});
      console.log(clc.green(`Meteor dependencies installed!`));
    }

    function clearFiles() {
      execSync('rm main.html main.js main.css', {cwd: clientPath});
    }

    console.log(clc.yellow('Cobalt is creating the boilerplate code for your Meteor app. This might take a couple of minutes.\n'));

    createMeteorApp();
    installNpmDeps();
    installMeteorDeps();
    clearFiles();
    createFiles();

    console.log(clc.green(`\nEverything\'s ready! Project created at: ${cobaltContainerPath}`));

  };
}

module.exports = {
  init,
};
