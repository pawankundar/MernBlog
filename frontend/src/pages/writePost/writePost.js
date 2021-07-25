require("./writePost.css");
const WritePost = () => {
  return (
    <div className="write">
   <img
        className="uploadedImage"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writePost">
        <div className="group">
          <label htmlFor="fileInput">
            <i className="icon fas fa-plus" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="formInput"
            autoFocus={true}
          />
        </div>
        <div className="group">
          <textarea
            placeholder="Tell your Story!"
            type="text"
            className="formInput description"
          ></textarea>
        </div>
        <button className="formPost">Post</button>
      </form>
    </div>
  );
};

export default WritePost;
