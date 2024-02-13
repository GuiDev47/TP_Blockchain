const express = require('express');
const app = express();
const port = 8080;
const { Web3 } = require('web3');

const web3 = new Web3('http://localhost:8545');


const abi =[{"inputs":[{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newREF","type":"string"}],"name":"REFChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"when","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"REF","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_unlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newREF","type":"string"}],"name":"setREF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC';
const myContract = new web3.eth.Contract(abi, contractAddress);


// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Node.js !');
});

app.get('/getValue', async(req, res) => {
  
  var result = await getMaVariable();
  console.info('Résultat de getMaVariable :', result);
  res.send(`Bienvenue sur le serveur Node.js ! value= ${result}`);
});



// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});


async function getMaVariable() {
  const result = await myContract.methods.get_unlock().call();
  console.log('Résultat de getMaVariable :', result);
}
