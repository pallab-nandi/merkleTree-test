const { stageOne, stageTwo } = require('./address');

function verify(address) {
  const allowList = stageOne.concat(stageTwo);
  return allowList.includes(address);
}

function stageOneVerify(address) {
  return stageOne.includes(address);
}

module.exports = { verify, stageOneVerify }