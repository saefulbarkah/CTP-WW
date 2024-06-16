const { BellBorne, ImpermanenceHeron } = require('../data/c4-boss');

const C4SupportFarm = (count = 10) => {
  const data = [];
  for (let index = 0; index < count; index++) {
    data.push({
      id: index + 1,
      filename: 'C4SupportFarm',
      ...BellBorne,
      ...ImpermanenceHeron,
    });
  }
  return data;
};

module.exports = { C4SupportFarm: C4SupportFarm };
