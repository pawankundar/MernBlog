import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

const { Link } = require("react-router-dom");

require("./login.css");
const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    axios
      .post("/auth/signin", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then((resp) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your username..."
          ref={usernameRef}
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password.."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link className="link" to="/signup">
        <button className="registerButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
