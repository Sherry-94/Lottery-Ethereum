// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { interface, bytecode } = require('./compile');

// const provider = new HDWalletProvider(
//   'opera hen butter claw sport sheriff quantum initial steel teach sample fine',
//   'https://rinkeby.infura.io/v3/ba4d97d8d4144662bba23ecd46ad846a'
// );
// const web3 = new Web3(provider);
// let inbox = null;
// const deploy = async () => {
  
//   const accounts = await web3.eth.getAccounts();

//   console.log('Attempting to deploy from account', accounts[0]);

//   inbox = await new web3.eth.Contract(JSON.parse(interface))
//   .deploy({
//     data: bytecode,
//     arguments: ['0xca35b7d915458ef540ade6068dfe2f44e8fa733c']
//   })
//   .send({ from: accounts[0], gas: '3000000' });
//   // promise['catch'](function(){console.log('caught')});
//   //     return promise;

//   // const result = await new web3.eth.Contract(JSON.parse(interface))
//   //   .deploy({ data: bytecode, arguments: ['Hi there!'] })
//   //   .send({ gas: '1000000', from: accounts[0] });

//   console.log('Contract deployed to', inbox.options.address);
// };
// deploy();


const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'opera hen butter claw sport sheriff quantum initial steel teach sample fine',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" +bytecode})
    .send({ gas: '1000000', from: accounts[0] });
	console.log('interface :'+interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();