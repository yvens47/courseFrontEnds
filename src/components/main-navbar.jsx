import { useState, useEffect, Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function MainNavBar(props) {
  const classes = useStyles();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom ${classes.root}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          A&P
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold"
                }}
                to="/courses"
                className="nav-link"
              >
                <i class="fab fa-buffer"></i> All courses
              </NavLink>
            </li>

            {props.user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {props.user.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/dashboard">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                  </Link>
                  <Link className="dropdown-item" to="/mycourses">
                    <i class="fab fa-buffer"></i> My Courses
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    onClick={props.logout}
                    className="dropdown-item"
                    to="/logout"
                  >
                    Sign out
                  </Link>
                </div>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i class="far fa-user"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className=" btn btn-info rounded-pill">
                    Sign Up
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(MainNavBar);
