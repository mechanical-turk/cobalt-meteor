const _ = require('lodash');

module.exports = (options, generate) => {
  const argv = options.argv;
  const actions = options.actions;
  const controllerName = argv[0];
  const css = options.css;
  const layout = options.layout;
  const pages = _.flatten(
    actions.map((action) => {
      return generate.page({
        argv,
        css,
        action,
        contained: true,
      });
    })
  );
  const routes = generate.route({
    argv,
    actions,
    prefix: options.prefix,
    layout,
  });
  return pages.concat(routes);
};
