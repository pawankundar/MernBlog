require('./Header.css')
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSmall">React and Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="headerImage"
      />
    </div>
  );
};

export default Header;
