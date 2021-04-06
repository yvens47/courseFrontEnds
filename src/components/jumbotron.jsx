import social from "../undraw_Social_ideas_re_j5v4.svg";
import { Link } from "react-router-dom";
function Jumbotron(props) {
  return (
    <div className="jumbotron  rounded-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={social} alt="" width="100%" />
          </div>
          <div className="col-md-6">
            <h1 className="display-2">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p className="small">
              It uses utility classNamees for typography and spacing to space
              content out within the larger container.
            </p>
            <Link
              className="btn  btn-lg  btn-secondary"
              to="/register"
              role="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jumbotron;
