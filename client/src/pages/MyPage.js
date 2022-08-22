import { useSelector } from 'react-redux'; // redux

import MyNFT from '../components/MyNFT';
import MyPost from '../components/MyPost'
import '../assets/styles/MyPage.css'

function MyPage() {
    let account = useSelector((state) => state.account)
    let tokenNum = 5
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
    return (
      <div className="MyPage">
        <div className="mypage-header">
          <h2 className="mypage-header-name">{account.nickname}</h2>
          <div className="mypage-header-address">
            <img className="mypage-header-address-image" src="https://static.opensea.io/general/ETH.svg" alt="Address" />  {account.address}
          </div>
        </div>
        <div className="mypage-contents row">
          <div className="mypage-contents-left col col-6">
            <div className="mypage-token">
              <h5 className="mypage-token-title">My Token: <span className="mypage-token-title-num" title={`You have ${tokenNum} tokens.`}>{tokenNum}</span></h5>
              Token transfer
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
  
export default MyPage;