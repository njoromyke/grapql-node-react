import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="ms-2" />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
