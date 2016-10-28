const path = require('path');
const { execSync, exec, spawn } = require('child_process');
const clc = require('cli-color');

function init(config) {
  return function(options) {
    const projectName = options.argv[0];
    const cobaltContainerPath = path.join(process.cwd(), projectName);
    const cobaltConfigPath = path.join(cobaltContainerPath, 'cobalt')
    const projectPath = path.join(cobaltContainerPath, config.SAVE_ROOT);
    console.log(clc.yellow('Cobalt is creating the boilerplate code for your Meteor app. This might take a couple minutes.\n'));
    console.log(clc.yellow(`Creating meteor app: ${projectName}...`));
    execSync(`mkdir ${cobaltContainerPath}`);
    execSync(`mkdir ${cobaltConfigPath}`);
    execSync(`mkdir ${projectPath}`);
    execSync(`meteor create ${config.SAVE_ROOT}`, {cwd: cobaltContainerPath});
    console.log(clc.green(`Meteor app created!`));
    console.log(clc.yellow(`Installing npm dependencies...`));
    execSync('npm install --save react react-dom react-addons-pure-render-mixin react-mounter react-bootstrap', {cwd: projectPath});
    console.log(clc.green(`npm dependencies installed!`));
    console.log(clc.yellow(`Installing meteor dependencies...`));
    execSync('meteor add react-meteor-data twbs:bootstrap aldeed:simple-schema aldeed:collection2 kadira:flow-router', {cwd: projectPath});
    console.log(clc.green(`Meteor dependencies installed!`));
    console.log('');
    console.log(clc.green(`Everything\'s ready! Project created at: ${cobaltContainerPath}`));
  };
}

module.exports = {
  init,
};
