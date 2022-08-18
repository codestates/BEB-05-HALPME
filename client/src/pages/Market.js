import '../assets/styles/App.css';
import {useEffect, useState} from 'react';
import Web3 from 'web3';
import erc721Abi from '../assets/abis/erc721Abis';

const nftCA = '0xA1846C81A7a30FB2bA54Bac6232944389F16EC3F';
const sampleTokenUri1 = 'https://ipfs.io/ipfs/QmVdxTPraJKZskdfFk1kwCWXo6JUwhLRY95M7b1ZUDWxB6?filename=QmVdxTPraJKZskdfFk1kwCWXo6JUwhLRY95M7b1ZUDWxB6';
const sampleTokenUri2 = 'https://ipfs.io/ipfs/QmcEQdfDrJafpdJVKYPnCF9sW1r3PVt18LiTq8eTR3pCP9?filename=QmcEQdfDrJafpdJVKYPnCF9sW1r3PVt18LiTq8eTR3pCP9';

function Market() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState();
  const [recipient, setRecipient] = useState('');
  const [tokenUri, setTokenUri] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const connectWallet = async() => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
  };
  const nftMinting = async () => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      nftCA,
      { from: account }
    );
    // eslint-disable-next-line no-restricted-globals
    const answer = confirm(`수취인: ${recipient}
    token URI: ${tokenUri}
    민팅을 진행하시겠습니까?`);
    if (!answer) {
      return false;
    }
    tokenContract.methods
      .mintNFT(recipient, tokenUri)
      .send({from: account})
      .on('receipt', (receipt) => {
        setRecipient('');
        setTokenUri('');
        alert(`민팅이 완료되었습니다. txHash: ${receipt.transactionHash}`);
      });
  }

  return (
    <div className="Market">
      <div>NFT Contract Address: {nftCA}</div>
      <div>sample token URI 1: {sampleTokenUri1}</div>
      <div>sample token URI 2: {sampleTokenUri2}</div>
      <button className='metaConnect' onClick={() => {
        connectWallet();
      }}>
        Connect to MetaMask
      </button>
      <div className='userInfo'>주소: {account}</div>
      <div className='nftMinting' style={{padding: '10px'}}>
        <div>
          <span>recipient Address: </span>
          <input type="text" onChange={(e) => {
            setRecipient(e.target.value);
          }}
          ></input>
        </div>
        <div>
          <span>Token URI: </span>
          <input type="text" onChange={(e) => {
            setTokenUri(e.target.value);
          }}
          ></input>
        </div>
        <button onClick={nftMinting}>NFT Minting</button>
      </div>
    </div>
  );
}

export default Market;