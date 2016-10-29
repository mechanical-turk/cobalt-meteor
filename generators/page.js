const getCorrectedNames = require('corrected-names');
const path = require('path');

function getNames(options) {
  const name = getCorrectedNames(options.argv[0]);
  const action = getCorrectedNames(options.action ? options.action : 'index');
  const pageName = getCorrectedNames(
    `${name.dashedName}-${action.dashedName}-page`
  );

  return {
    name,
    action,
    pageName,
  };
}

function getComponent(options) {
  const { name, action, pageName } = getNames(options);
  const filename = `${action.underscoredName}.jsx`;
  const parent = `imports/ui/Pages/${name.pascalCaseName}`;
  const componentPath = path.join(parent, filename);
  return {
    filename,
    parent,
    templateName: `component.stateful`,
    templateData: {
      componentPath,
      pascalCaseName: pageName.pascalCaseName,
      dashedName: pageName.dashedName,
    },
  };
}

function getStylesheet(options) {
  const { name, action, pageName } = getNames(options);
  return {
    filename: `${pageName.dashedName}.${options.css}`,
    parent: `client/style/Pages/${name.pascalCaseName}`,
    templateName: `stylesheet.solo`,
    templateData: pageName,
  };
}

module.exports = (options) => {
  return [
    getComponent(options),
    getStylesheet(options),
  ];
};
