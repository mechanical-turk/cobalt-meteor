const getCorrectedNames = require('corrected-names');

module.exports = (options) => {
  const name = getCorrectedNames(options.argv[0]);
  return [
    {
      filename: `e1_${name.dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.one',
      templateData: {
        name: 'Jane',
        occupation: 'Software Engineer',
      },
    },
    {
      filename: `e2_${name.dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.two',
      templateData: {
        name: 'Joe',
        notOccupation: 'Nurse',
      },
    },
  ];
};
