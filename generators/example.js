module.exports = (options) => {
  return [
    {
      filename: `e1_${options.name.dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.one',
      templateData: {
        name: 'Jane',
        occupation: 'Software Engineer',
      },
    },
    {
      filename: `e2_${options.name.dashedName}.txt`,
      parent: 'examples',
      templateName: 'example.two',
      templateData: {
        name: 'Joe',
        notOccupation: 'Nurse',
      },
    },
  ];
};
