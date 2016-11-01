const getCorrectedNames = require('corrected-names');

module.exports = (options) => {
  const name = getCorrectedNames(options.argv[0]);
  return {
    filename: `${name.underscoredName}.js`,
    parent: 'imports/api',
    templateName: 'collection.simple_schema',
    templateData: name,
  };
};
