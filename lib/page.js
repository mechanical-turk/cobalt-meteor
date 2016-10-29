const getCorrectedNames = require('corrected-names');
const path = require('path');

function getPageDetails(options) {
  const name = getCorrectedNames(options.argv[0]);
  const action = getCorrectedNames(options.action ? options.action : 'index');
  const pageName = getCorrectedNames(
    `${name.dashedName}-${action.dashedName}-page`
  );
  const componentFileName = `${action.underscoredName}.jsx`;
  const componentParent = `imports/ui/Pages/${name.pascalCaseName}`;
  const componentPath = path.join(componentParent, componentFileName);

  return {
    name,
    action,
    pageName,
    componentFileName,
    componentParent,
    componentPath
  };
}

module.exports = {
  getPageDetails,
};
