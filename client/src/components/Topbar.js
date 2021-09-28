import './topbar.css';
import { Link } from "react-router-dom";

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
             <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/home">
                        HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                        ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                        CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                    <img
                    className="topImg"
                    src="https://images.unsplash.com/photo-1602677415790-8bda81c6fed2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
                    alt="navbar"
                    />
                    </Link>
                ) : (
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">
                            REGISTER
                        </Link>
                    </li>
                </ul>
                )}
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>

    );
}

