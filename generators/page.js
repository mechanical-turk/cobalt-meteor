const getCorrectedNames = require('corrected-names');
const path = require('path');
const { getPageDetails } = require('../lib/page.js');

function getComponent(options) {
  const {
    name,
    action,
    pageName,
    componentFileName,
    componentParent,
    componentPath,
  } = getPageDetails(options);
  return {
    parent: componentParent,
    filename: componentFileName,
    templateName: options.contained ?
      `component.contained` :
      `component.stateful` ,
    templateData: {
      componentPath,
      pascalCaseName: pageName.pascalCaseName,
      dashedName: pageName.dashedName,
    },
  };
}

function getStylesheet(options) {
  const { name, action, pageName } = getPageDetails(options);
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
