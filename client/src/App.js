import React ,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Electionabi from './abis/Election.json';
import Web3 from 'web3';


function App() {

  useEffect(() => {
    loadweb3();
    loadBlockchainData();
    console.log('i fire once');
  }, [])
  
  

  const[Currentaccount, setCurrentaccount] = useState("");
  const[loader, setloader] = useState(true);
  const[Electionsm,SetElectionsm] = useState();
  const[Candidate1,setCandidate1] = useState();
  const[Candidate2,setCandidate2] = useState();


  
  const loadweb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if(window.web3) {
      window.ethereum = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-ethereum browser detected. You should consider trying Metamask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setloader(true);
    const web3 = window.web3;
    
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if(networkData){
      const election = new web3.eth.Contract(Electionabi.abi,networkData.address);
      
      const candidate1 = await election.methods.candidates(1).call();
      
      const candidate2 = await election.methods.candidates(2).call();

      setCandidate1(candidate1);
      setCandidate2(candidate2);
      
      console.log(election);

      SetElectionsm(election);
      setloader(false);
    }
    else
    {
      window.alert('The smart contract is not deployed on current network')
    }
  };

  const voteToCandidate = async(candidateId) => {
    setloader(true);
    await Electionsm
    .methods
    .Vote(candidateId)
    .send({from : Currentaccount})
    .on('transactionhash',() =>{
      console.log("succesfully ran");
    })
    setloader(false);
  }

  if(loader) {
    return <div> loading...</div>
  }
  
  return (
    <div>
    <Navbar accounts={Currentaccount}/>
    <Body candidate1={Candidate1} candidate2={Candidate2} voteToCandidate={voteToCandidate} accounts={Currentaccount}></Body>
    </div>
  );
}

export default App;
