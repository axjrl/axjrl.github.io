import {ethers} from 'ethers';
import DustyTapes from './DustyTapes.json';
import React from "react";
const contractAddress = "0x60C20907eF91CEF38B27A37E5e73df5861273F47"

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, DustyTapes.abi, signer);



  const MainMint = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    async function mintToken() {
    contract.mintNFT(accounts[0], {value: ethers.utils.parseEther('0.01')}); 
    }
    async function connectAccount() {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);
      } 
      catch (error) {
        if (error.code === 4001) {
          // User rejected request
        }
      }
    }
    
    return (
      <div>
        {isConnected ? (
            <button onClick={mintToken} className="freeMint">FREE MINT</button>
        ) : (
            null
        )
        }
        <div>
            {isConnected ? (
                <p>Connected</p>
            ) : (
              <button onClick={connectAccount} className="freeMint">Connect</button>
            )
            
            }
        </div>
      </div>
    )
  
  }



    


export default MainMint;