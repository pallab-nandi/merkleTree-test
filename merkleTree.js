const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const { stageOne, stageTwo } = require('./address');
const whiteList = stageOne.concat(stageTwo);

const leaves = whiteList.map(x => Buffer.from(keccak256(x)).toString('hex'));
console.log(leaves);
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

const leaf = keccak256("0x9907ac6f075cE5C428cd4E99df505624d28a1a14");
const proof = tree.getProof(leaf);


// console.log(tree.toString());
console.log(`\n root: ${root}`);

console.log(`\n proof: ${proof.map(x => MerkleTree.bufferToHex(x.data))}`);

function getProof(address) {
  const leaf = keccak256(address);
  const proof = tree.getHexProof(leaf);

  return proof;
}

module.exports = { getProof }

/**

  ["0x20905d4b2a461a5f700dce2566014b33a929fc8fc87aadcb66deb271b3d52c91","0xfab1c301aac16c76c517becdb8e55635082af9077f584ca6e551ab55563bbeca","0xf33978e11d8f6f58730e60d05f13c5f4a5fad02e1977c16fdaf3e11967db9630"]

 */