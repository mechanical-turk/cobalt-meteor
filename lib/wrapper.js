const getCorrectedNames = require('corrected-names');

function getWrapperDetails(options) {
  const name = getCorrectedNames(options.argv[0]);
  const wrapperName = getCorrectedNames(`${options.argv[0]}-wrapper`);
  const ref = name.camelCaseName;

  return {
    name,
    wrapperName,
    ref,
  };
}

module.exports = {
  getWrapperDetails,
};
