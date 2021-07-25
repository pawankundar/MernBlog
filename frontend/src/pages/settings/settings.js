const { default: SideBar } = require("../../Components/sideBar/sideBar");

require("./settings.css");
const Settings = () => {
  return (
    <div className="settings">
      <div className="wrapper">
        <div className="settingsTitle">
          <span className="updateProfile">Update Profile</span>
          <span className="deleteProfile">Delete Profile</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="profilePic">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="picInput">
              <i className="profileIputIcon far fa-user-circle" />
            </label>
            <input
              id="picInput"
              className="picInput"
              type="file"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="pawan" name="name"></input>
          <label>Email</label>
          <input type="email" placeholder="pawan@mail.com" name="email"></input>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="updateButton" type="submit">
            Update
          </button>
        </form>
      </div>

      <SideBar />
    </div>
  );
};

export default Settings;
