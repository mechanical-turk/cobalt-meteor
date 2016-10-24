const path = require('path');
const { run, config } = require('cobalt-base');

config.TEMPLATES_DIR = path.join(__dirname, 'templates');
config.GENERATORS_DIR = path.join(__dirname, 'generators');

run();
