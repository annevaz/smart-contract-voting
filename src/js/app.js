
const CONTRACT_ADDRESS = "0xD1389FEEE5a63FE62ABb20358EEC3fe09Fc64d3f";

var myAddress;
var voting;

const ethEnabled = () => {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.ethereum.enable();
		return true;
  	}

	return false;
}

const getMyAccounts = accounts => {
	try {
		if (accounts.length == 0) {
			alert("Você não tem contas habilitadas no Metamask!");
		} else {
			myAddress = accounts[0];
			accounts.forEach(async myAddress => {
				console.log(myAddress + " : " + await window.web3.eth.getBalance(myAddress));
			});
		}
	} catch(error) {
		console.log("Erro ao obter contas...");
	}
};

window.addEventListener('load', async function() {
	if (!ethEnabled()) {
  		alert("Instale um navegador compatível com Ethereum ou uma extensão como o MetaMask para utilizar esse dApp!");
	} else {
        getMyAccounts(await web3.eth.getAccounts());

        voting = new web3.eth.Contract(VotingContractInterface, CONTRACT_ADDRESS);
    }
});