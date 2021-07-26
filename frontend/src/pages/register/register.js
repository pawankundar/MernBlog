const { Link } = require("react-router-dom");

require("./register.css");
const Register = () => {
  return (
    <div className="register">
      <span className="Registertitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          name="username"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          name="password"
        />
        <button className="registerBtn">Register</button>
      </form>
      <Link className="link" to="/login">
        <button className="loginBtn">Login</button>
      </Link>
    </div>
  );
};

export default Register;
