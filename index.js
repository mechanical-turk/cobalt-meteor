#!/usr/bin/env node
const path = require('path');
const { run, config } = require('cobalt-base');

config.TEMPLATES_DIR = path.join(__dirname, 'templates');
config.GENERATORS_DIR = path.join(__dirname, 'generators');

config.OPTION_DEFINITIONS.push(
  { name: 'stateless', type: Boolean },
  { name: 'css', type: String, defaultValue: 'less'}
);

run();
