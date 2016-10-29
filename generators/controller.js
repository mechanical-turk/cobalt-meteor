const _ = require('lodash')

module.exports = (options, generate) => {
  const argv = options.argv;
  const controllerName = argv[0];
  const css = options.css;
  return _.flatten(
    options.actions.map((action) => {
      return generate.page({
        argv,
        css,
        action,
      });
    })
  );
};
