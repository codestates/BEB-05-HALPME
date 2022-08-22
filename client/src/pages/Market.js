import '../assets/styles/App.css';
import styles from '../assets/styles/button.css';
import {useEffect, useState} from 'react';
import Web3 from 'web3';
import erc721Abi from '../assets/abis/erc721Abis';

const nftCA = '0xA1846C81A7a30FB2bA54Bac6232944389F16EC3F';
const sampleTokenUri1 = 'https://ipfs.io/ipfs/QmVdxTPraJKZskdfFk1kwCWXo6JUwhLRY95M7b1ZUDWxB6?filename=QmVdxTPraJKZskdfFk1kwCWXo6JUwhLRY95M7b1ZUDWxB6';
const sampleTokenUri2 = 'https://ipfs.io/ipfs/QmcEQdfDrJafpdJVKYPnCF9sW1r3PVt18LiTq8eTR3pCP9?filename=QmcEQdfDrJafpdJVKYPnCF9sW1r3PVt18LiTq8eTR3pCP9';

function Market() {
  return (
    <div className="mint-box">
      <div className="form-box">
      <span className="form-box-label address">주소</span>
      <input className="form-box-input" type="text" placeholder="ex) URL을 입력해주세요..." />
      <div className="form-box-btn-wrap">
        <button className="btn1 hover-filled-slide-down">
          <span>MINT</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Market;