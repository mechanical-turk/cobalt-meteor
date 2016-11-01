const getCorrectedNames = require('corrected-names');

function getComponent(options) {
  const name = getCorrectedNames(options.argv[0]);
  const parent = `imports/ui/Components`;
  const filename = `${name.pascalCaseName}.jsx`;
  const componentPath = `${parent}/${filename}`;
  return {
    filename,
    parent,
    templateName: options.contained ?
      `component.contained` :
      options.stateless ?
        `component.stateless` :
        `component.stateful`,
    templateData: {
      componentPath,
      pascalCaseName: name.pascalCaseName,
      dashedName: name.dashedName,
    },
  };
}

function getStylesheet(options) {
  const name = getCorrectedNames(options.argv[0]);
  return {
    filename: `${name.dashedName}.${options.css}`,
    parent: `client/style/Components/`,
    templateName: `stylesheet.solo`,
    templateData: name,
  }
}

module.exports = (options, generators) => {
  return [
    getComponent(options),
    getStylesheet(options),
  ];
};
