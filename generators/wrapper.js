const getCorrectedNames = require('corrected-names');
const { getWrapperDetails } = require('../lib/wrapper.js');

module.exports = (options) => {
  const { name, wrapperName, ref } = getWrapperDetails(options);
  return {
    filename: `${wrapperName.pascalCaseName}.jsx`,
    parent: `imports/ui/Components`,
    templateName: 'component.wrapper',
    templateData: {
      ref,
      wrapperName: wrapperName.pascalCaseName,
      wrappedName: options.wrappedName ?
        options.wrappedName :
        name.originalName,
      render: options.render ?
        options.render :
        `<span ref="${ref}" />`,
    },
  };
};
