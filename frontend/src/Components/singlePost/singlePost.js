import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

require("./singlePost.css");
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };

    getPost();
  }, [path]);

  const deletePost = () => {
    axios
      .delete(`/posts/${path}`, {
        data: { username: user.username },
      })
      .then((resp) => window.location.replace("/"))
      .catch((err) => console.log("error in deletePost"));
  };
  const ImageLink = "http://localhost:8000/images/"
  const updatePost = () => {};

  return (
    <div className="singlePost">
      <div className="wrapper">
        {post.photo && <img className="postImage" src={ ImageLink +post.photo +".jpg"} alt="" />}
        <h1 className="postTitle">
          {post.title}
          {user.username === post.username && (
            <div className="EditButtons">
              <i className="editIcon far fa-edit" />
              <i className="editIcon far fa-trash-alt" onClick={deletePost} />
            </div>
          )}
        </h1>
        <div className="PostInfo">
          <span>
            Author :
            <Link to={`/?user=${post.username}`} className="link">
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
