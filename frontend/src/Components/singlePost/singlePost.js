require("./singlePost.css");
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="wrapper">
        <img
          className="postImage"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="postTitle">
          Lorem ipsum dolor
          <div className="EditButtons">
            <i className="editIcon far fa-edit" />
            <i className="editIcon far fa-trash-alt" />
          </div>
        </h1>
        <div className="PostInfo">
          <span >
            Author : <b className="author">Pawan</b>
          </span>
          <span className="Date">1 hour ago</span>
        </div>


        <p className="postDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa
          quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum
          necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
