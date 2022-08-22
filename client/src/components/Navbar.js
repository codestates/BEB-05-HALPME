import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';
// import { useSelector, useDispatch } from 'react-redux'; // redux
// import { accountActions } from "../redux/accountSlice";

// eslint-disable-next-line
function Navbar({ }) {
    // const account = useSelector((state) => state.account.address);
    // const dispatch = useDispatch()

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
                        <Link to="/signin">
                            <button className="nav-item-btn color-bg btn">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="nav-item-btn color-bg btn">Signup</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar