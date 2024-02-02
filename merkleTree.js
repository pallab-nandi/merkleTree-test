const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const { stageOne, stageTwo } = require('./address');
const whiteList_phaseTwo = stageOne.concat(stageTwo);

const leaves_phaseOne = stageOne.map(x => Buffer.from(keccak256(x)).toString('hex'));
const leaves_phaseTwo = whiteList_phaseTwo.map(x => Buffer.from(keccak256(x)).toString('hex'));
// console.log(leaves);
const tree_phaseOne = new MerkleTree(leaves_phaseOne, keccak256, { sortPairs: true });
const tree_phaseTwo = new MerkleTree(leaves_phaseTwo, keccak256, { sortPairs: true });

const root_phaseOne = tree_phaseOne.getHexRoot();
const root_phaseTwo = tree_phaseTwo.getHexRoot();

// const leaf = keccak256("0xfe5FaD4f6a8C67e7Eb74428453A7490BF9Bd932F");
// const proof = tree_phaseOne.getProof(leaf);


// console.log(tree.toString());
console.log(`\n Root Phase One: ${root_phaseOne}`);
console.log(`\n Root Phase Two: ${root_phaseTwo}`);

// console.log(`\n proof: ${proof.map(x => MerkleTree.bufferToHex(x.data))}`);

function getProof(address) {
  const leaf = keccak256(address);
  const proof = tree_phaseOne.getHexProof(leaf);

  return proof;
}

module.exports = { getProof }

/**

  ["0x20905d4b2a461a5f700dce2566014b33a929fc8fc87aadcb66deb271b3d52c91","0xfab1c301aac16c76c517becdb8e55635082af9077f584ca6e551ab55563bbeca","0xf33978e11d8f6f58730e60d05f13c5f4a5fad02e1977c16fdaf3e11967db9630"]

 */