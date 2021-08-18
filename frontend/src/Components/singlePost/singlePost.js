import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

require("./singlePost.css");
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="wrapper">
        {post.photo && <img className="postImage" src={post.photo} alt="" />}
        <h1 className="postTitle">
          {post.title}
          <div className="EditButtons">
            <i className="editIcon far fa-edit" />
            <i className="editIcon far fa-trash-alt" />
          </div>
        </h1>
        <div className="PostInfo">
          <span>
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              {" "}
              <b className="author">{post.username}</b>
            </Link>
          </span>
          <span className="Date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="postDescription">{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
