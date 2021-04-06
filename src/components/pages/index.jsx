import { Component } from "react";
import Jumbotron from "../jumbotron";
import CardCol from "../card-col";
import social from "../../undraw_Social_ideas_re_j5v4.svg";
import "./pages.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <main className="container">
          <div className="row mt-5 pt-5 pb-5 justify-content-md-center column">
            <CardCol
              title="Free Learning"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae"
              alt="Watch lesson"
              image="https://programmingwithmosh.com/wp-content/uploads/2019/02/icon04.svg"
            />
            <CardCol
              title="Social Learning"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae"
              alt="Watch lesson"
              image="https://programmingwithmosh.com/wp-content/uploads/2019/02/icon02.svg"
            />
            <CardCol
              title="Watch "
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae"
              alt="Watch lesson"
              image="https://programmingwithmosh.com/wp-content/uploads/2019/02/icon03.svg"
            />

            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </main>
        <div className="container-fluid">
          <div className="row row-primary  mt-3 pt-5 pb-5 justify-content-md-center ">
            <div className="container">
              <div className="row pb-3 pt-3">
                <div className="col-md-4 mr-3">
                  <img
                    width="90%"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=2&w=606&h=553&q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=3&w=606&h=553&q=40 3x"
                  />
                </div>
                <div className="col-md-7">
                  <div className="section-h1">
                    <h1 className="pt-3 pb-3 ">
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Cumque iure sequi temporibus cum numquam odit unde quasi
                      excepturi, exercitationem soluta repellat tempore? Amet
                      perspiciatis totam ad ratione similique deleniti a!
                    </p>
                    <p>
                      <Link to="/courses" className="btn  btn-info  m-2">
                        Learn More
                      </Link>
                      <Link
                        to="/courses"
                        className="btn  btn btn-secondary  m-2"
                      >
                        Browse all Courses
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5 pt-5 pb-3 justify-content-md-center">
            <div className="container">
              <div className="row">
                <hr className="featurette-divider" />
                <div className="row featurette pt-3">
                  <div className="col-md-7">
                    <h2 className="featurette-heading">
                      First featurette heading.{" "}
                      <span className="text-muted">It’ll blow your mind.</span>
                    </h2>
                    <p className="lead">
                      Donec ullamcorper nulla non metus auctor fringilla.
                      Vestibulum id ligula porta felis euismod semper. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur.
                      Fusce dapibus, tellus ac cursus commodo.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <img
                      src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="left pic"
                      width="100%"
                    />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette pt-3">
                  <div className="col-md-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 p-1 border ">
                          <img
                            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="left pic"
                            width="100%"
                          />
                        </div>
                        <div className="col-md-6 p-1 border ">
                          <img
                            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="left pic"
                            width="100%"
                          />
                        </div>
                        <div className="col-md-6 p-1 border ">
                          <img
                            src="https://images.pexels.com/photos/6517095/pexels-photo-6517095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="left pic"
                            width="100%"
                          />
                        </div>
                        <div className="col-md-6 p-1 border ">
                          <i class="fab fa-battle-net fa-10x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="">
                      {/* <i class="fab fa-battle-net fa-10x"></i> */}
                    </div>
                    <h2
                      className="featurette-heading"
                      style={{ marginTop: "7rem" }}
                    >
                      First featurette heading.{" "}
                      <span className="text-muted">It’ll blow your mind.</span>
                    </h2>
                    <p className="lead">
                      Donec ullamcorper nulla non metus auctor fringilla.
                      Vestibulum id ligula porta felis euismod semper. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur.
                      Fusce dapibus, tellus ac cursus commodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row subscribe-main p-5 p-5 justify-content-md-center">
            <div className="col-md-5 pt-5">
              <h2 className="display-4">Subscribe</h2>

              <form className={"classes.root"} noValidate autoComplete="off">
                <div class="form-group mt-4">
                  <TextField
                    style={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="enter your email to subscribe"
                    variant="standard"
                    // defaultValue="enter your email to subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
