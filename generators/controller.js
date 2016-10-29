const _ = require('lodash');

module.exports = (options, generate) => {
  const argv = options.argv;
  const actions = options.actions;
  const controllerName = argv[0];
  const css = options.css;
  const pages = _.flatten(
    actions.map((action) => {
      return generate.page({
        argv,
        css,
        action,
      });
    })
  );
  const routes = generate.route({
    argv,
    actions,
  });
  return pages.concat(routes);
};
