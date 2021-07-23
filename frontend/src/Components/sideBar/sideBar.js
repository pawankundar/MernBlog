require("./sideBar.css");
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Cinema</li>
          <li className="sideBarListItem">Tech</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Follow Us</span>
        <div className="sideBarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
