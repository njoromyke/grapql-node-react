import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="fs-1 text-danger mb-3" />
      <h1>404</h1>
      <Link to="/" className="btn btn-light mt-3">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
