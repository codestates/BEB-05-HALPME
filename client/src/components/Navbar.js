import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';
// import { useSelector, useDispatch } from 'react-redux'; // redux
// import { accountActions } from "../redux/accountSlice";

function Navbar({ }) {
    // const account = useSelector((state) => state.account.address);
    // const dispatch = useDispatch()

    // const connectWallet = async () => {
        // dispatch(accountActions.fetchAccount());
    // }

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        HALP ME
                    </Link>
                    <div className="navbar-items">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/market" className="nav-item">Market</Link>
                        <Link to="/mypage" className="nav-item">MyPage</Link>
                        <button className="btn btn-outline-success" type="submit">로그인</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar