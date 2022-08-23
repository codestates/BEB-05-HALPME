import { Link } from "react-router-dom";
import '../../assets/styles/tabs/Navbar.css';

// eslint-disable-next-line
function Navbar({ }) {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" id="nav-brand">
                        HALP ME
                    </Link>
                    <div className="navbar-items">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/market" className="nav-item">Market</Link>
                        <Link to="/mypage" className="nav-item">MyPage</Link>
                        <Link to="/signin">
                            <button className="btn" id="main-btn-sm">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn" id="main-btn-sm">Signup</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar