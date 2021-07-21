import "./NavBar.css";
const NavBar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="List">
          <li className="listItem">HOME</li>
          <li className="listItem">ABOUT</li>
          <li className="listItem">CONTACT</li>
          <li className="listItem">WRITE</li>
          {user && <li className="listItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="profileImage"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profilePic"
          />
        ) : (
          <ul className="list">
            <li className="listItem">LOGIN</li>
            <li className="listItem">REGISTER</li>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
