const getCorrectedNames = require('corrected-names');

module.exports = (options) => {
  const names = getCorrectedNames(options.argv[0]);
  return {
    filename: 'main.html',
    parent: 'client',
    templateName: '_init.main_html',
    templateData: names,
  };
}
