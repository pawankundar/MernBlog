import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

require("./sideBar.css");
const SideBar = () => {
  const [category, setCategory] = useState([]);
  const getData = async () => {
    const res = await axios.get("/categories");
    setCategory(res.data);
  };

  useState(() => {
    getData();
  }, []);
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
          {category.map((cate, key) => (
           <Link to={`/?category=${cate.name}`} className='link'>
            <li className="sideBarListItem" key={key}>
              {cate.name}
            </li></Link>
          ))}
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
