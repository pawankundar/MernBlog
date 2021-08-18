import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./NavBar.css";

const NavBar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="List">
          <Link className="link" to="/">
            <li className="listItem">HOME</li>
          </Link>
          <Link className="link" to="">
            <li className="listItem">ABOUT</li>
          </Link>
          <Link className="link" to="">
            <li className="listItem">CONTACT</li>
          </Link>
          <Link className="link" to="/write">
            {user && <li className="listItem">WRITE</li>}
          </Link>
          <Link className="link">
            {user && (
              <li className="listItem" onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="profileImage"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="profilePic"
            />
          </Link>
        ) : (
          <ul className="List">
            <Link className="link" to="login">
              <li className="listItem">LOGIN</li>
            </Link>
            <Link className="link" to="/signup">
              <li className="listItem">REGISTER</li>
            </Link>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
