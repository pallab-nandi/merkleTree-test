const { stageOne, stageTwo } = require('./address');

function verify(address) {
  const allowList = stageOne.concat(stageTwo);
  return allowList.includes(address.toLowerCase());
}

function stageOneVerify(address) {
  return stageOne.includes(address.toLowerCase());
}

console.log(stageOneVerify("0xbef18c080b30d18f8a22a09e5dc0a67f7EAAC27E"))

module.exports = { verify, stageOneVerify }