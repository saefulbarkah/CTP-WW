const { Tempest, Thundering } = require('../data/c4-boss');

const VoidThunderFarm = (count = 10) => {
  const data = [];
  for (let index = 0; index < count; index++) {
    data.push({
      id: index + 1,
      filename: 'VoidThunderFarm',
      ...Tempest,
      ...Thundering,
    });
  }
  return data;
};

module.exports = { VoidThunderFarm: VoidThunderFarm };
