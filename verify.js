const { stageOne } = require('./address');

function verify(address) {
  return stageOne.includes(address);
}

module.exports = { verify }