const { Link } = require("react-router-dom");

require("./login.css");
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="input"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password.."
        />
        <button className="loginButton">Login</button>
      </form>
      <Link className="link" to="/signup">
        <button className="registerButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
