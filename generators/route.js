const getCorrectedNames = require('corrected-names');
const { getPageDetails } = require('../lib/page.js');
const path = require('path');

module.exports = (options) => {
  const argv = options.argv;
  const name = getCorrectedNames(argv[0]);
  const layoutName = options.layoutName ?
    getCorrectedNames(options.layoutName) :
    getCorrectedNames('MainLayout');
  const actions = options.actions ?
    options.actions :
    ['index'];
  const routes = actions.map((action) => {
    const prefix = getCorrectedNames(action).underscoredName;
    const optionsForPage = {
      argv,
      action,
    };
    const {
      pageName,
      componentPath,
    } = getPageDetails(optionsForPage);
    return {
      prefix,
      page: pageName.pascalCaseName,
      pageFilepath: path.join('../../', componentPath),
    };
  });
  const sectionName = getCorrectedNames(`${name.pascalCaseName}-section`);

  return {
    filename: `${name.underscoredName}.jsx`,
    parent: 'client/routes',
    templateName: 'route.sectioned',
    templateData: {
      routes,
      sectionName: sectionName.pascalCaseName,
      prefix: name.underscoredName,
      layoutName: layoutName.pascalCaseName,
    },
  };
};
