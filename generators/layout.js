const getCorrectedNames = require('corrected-names');

function getComponent(options) {
  const name = getCorrectedNames(options.argv[0]);
  const layoutName = getCorrectedNames(`${name.dashedName}-layout`);
  const parent = 'imports/ui/Layouts';
  const filename = `${name.pascalCaseName}.jsx`;
  const layoutPath = `${parent}/${filename}`;
  const navbarPure = options.navbar ?
    options.navbar :
    'MainNavbar';
  const navbarPascalCase = getCorrectedNames(navbarPure).pascalCaseName;

  return {
    filename,
    parent,
    templateName: 'component.layout',
    templateData: {
      pascalCaseName: name.pascalCaseName,
      cssClass: layoutName.dashedName,
      navbar: navbarPascalCase,
    },
  };
}

function getStylesheet(options) {
  const name = getCorrectedNames(options.argv[0]);
  const layoutName = getCorrectedNames(`${name.dashedName}-layout`);
  return {
    filename: `${layoutName.dashedName}.${options.css}`,
    parent: `client/style/Layouts`,
    templateName: 'stylesheet.solo',
    templateData: layoutName,
  };
}

module.exports = (options) => {
  return [
    getComponent(options),
    getStylesheet(options),
  ];
};
