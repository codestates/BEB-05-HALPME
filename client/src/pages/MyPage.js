import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MyNFT, MyPost } from '../components'
import '../assets/styles/MyPage.css'
import axios from "axios";


function MyPage() {
  // var accountAddress;
  // function setAccountAddress(data){
  //   accountAddress = data;
  // }

  let account = useSelector((state) => state.account)
  let [accountAddress, setAccountAddress] = useState("")
  let [transferTo, setTransferTo] = useState("")
  let [transferAmount, setTransferAmount] = useState(0)
  let [validationMsg, setValidationMsg] = useState("")
  let tokenNum = useState(100)
  let nfts = [
    {
        id: 1,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 2,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 3,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 4,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 5,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 6,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 7,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    },
    {
        id: 8,
        owner: 'songzero',
        img_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a180a134940265.61dee9a60a053.png'
    }
  ]

  const url = 'http://localhost:8000/api/wallet-data/1';

  axios.get(url,{}).then((res) => {

    console.log("--------------------------start");
    console.log(res.data);
    console.log("--------------------------stop");

    setAccountAddress(res.data['data'][0]['address']);
  })
  // functions
  let onChangeAddress = (e) => {
    setTransferTo(e.target.value)
  }
  let onChangeAmount = (e) => {
    setTransferAmount(Number(e.target.value))
  }
  let isValidate = () => {
    if (!transferTo.length === 42 || transferTo.slice(0, 2) === "0x") {
        setValidationMsg("전송할 주소가 잘못되었습니다.")
    }
    else if (transferAmount < 1 || Number.isInteger(transferAmount)) {
        setValidationMsg("전송할 토큰 양이 잘못되었습니다.")
    }
    else {
        setValidationMsg("")
        return true
    }
    return false
  }
  let transferToken = () => {
    if (isValidate()) {
      let params = {
        from: '',
        to: transferTo,
        amount: transferAmount
      }
      console.log(params)
    }
  }

  // views
  return (
    <div className="MyPage">
      <div className="mypage-header">
        <h2 className="mypage-header-name">{account.nickname}</h2>
        <div className="mypage-header-address">
          <img className="mypage-header-address-image" src="https://static.opensea.io/general/ETH.svg" alt="Address" />  {accountAddress}
        </div>
      </div>
      <div className="mypage-contents row">
        <div className="mypage-contents-left col col-6">
          <div className="mypage-token">
            <h5 className="mypage-token-title">My Token: <span className="mypage-token-title-num" title={`You have ${tokenNum} tokens.`}>{tokenNum}</span></h5>
            <div className="mypage-token-box">
              {/* <span className="mypage-token-box-label address">Token Transfer</span> */}
              <input className="mypage-token-box-input-1" type="text" placeholder="지갑 주소" onChange={onChangeAddress} />에
              <input className="mypage-token-box-input-2" type="text" placeholder="토큰 개수" onChange={onChangeAmount} /> 토큰을 전송합니다.
              <div className="mypage-token-box-btn-wrap">
                <button className="mypage-token-box-btn hover-filled-slide-down">
                  <span onClick={transferToken}>Transfer</span>
                </button>
              </div>
            </div>
            {
                      validationMsg.length >= 1
                      ? <div className="mypage-token-box-validation-msg">{ validationMsg }</div>
                      : <span></span>
            }
          </div>
          <div className="mypage-posts">
            <h5 className="mypage-posts-title">My Posts</h5>
            <MyPost />
          </div>
        </div>
        <div className="mypage-contents-right card-group col col-6">
          <div className="mypage-nft row">
            <h5 className="mypage-nft-title">My NFTs</h5>
            {
              nfts.map((nft)=> <MyNFT nft={nft} key={nft.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default {
  findAll: async () => {
    const data = await db.NFT.findAll();
    if (data) {
      return data;
    }
  },
  findByAddress: async (address) => {
    const data = await db.NFT.findAll({ where: { address: address } });
    if (data) {
      return data;
    }
  },
};