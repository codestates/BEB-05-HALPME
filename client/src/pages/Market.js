import { useState } from 'react';
import '../assets/styles/Market.css';
import axios from "axios";

function Market() {
  const url = `http://localhost:8000`;
  axios.get(url,{}).then((res) => {
    console.log(res.data.data);
  })
  // data
  let [imgUrl, setImgUrl] = useState("")

  // functions
  let onChangeImgUrl = (e) => {
    setImgUrl(e.target.value)
  }
  let mint = () => {
    let params = {
      address: '',
      image_url: imgUrl
    }
    console.log(params)
  }


  // views
  return (
    <div className="mint-box">
      <div className="form-box">
        <span className="form-box-label address">URL 주소</span>
        <input className="form-box-input" type="text" placeholder="ex) URL을 입력해주세요..." onChange={onChangeImgUrl} />
        <div className="form-box-btn-wrap">
          <button className="btn1 hover-filled-slide-down">
            <span onClick={mint}>MINT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Market;