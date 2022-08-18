import { Link } from "react-router-dom";

import { useState } from "react";

function Signup() {
    let [id, setId] = useState('')
    let [nick, setNick] = useState('')
    let [pw, setPw] = useState('')
    let [pwConf, setPwConf] = useState('')
    return (
      <div className="Signup">
        Signup
      </div>
    );
}
  
export default Signup;