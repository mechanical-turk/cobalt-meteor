module.exports = (options) => {
  return [
    {
      filename: `e1_${options.argv[0].dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.one',
      templateData: {
        name: 'Jane',
        occupation: 'Software Engineer',
      },
    },
    {
      filename: `e2_${options.argv[0].dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.two',
      templateData: {
        name: 'Joe',
        notOccupation: 'Nurse',
      },
    },
  ];
};
