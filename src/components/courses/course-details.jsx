import { React, useEffect, useState } from "react";
import SideNavBar from "../sidebar";
import { countCompleted, percent } from "../../utils";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router-dom";
import axios from "axios";

const chapters = [
  {
    id: "367458609854",
    title: "chpterone title",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    lessons: [
      {
        completed: false,
        title: "Lorem ipsum",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      },
      {
        completed: false,
        title: "dipiscing eli",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      },
      {
        completed: true,
        title: "dipiscing eli",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      }
    ]
  },
  {
    id: "367458609854",
    title: "chptertwo title",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    lessons: [
      {
        completed: false,
        title: "Lorem ipsum",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      },
      {
        completed: true,
        title: "dipiscing eli",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      },
      {
        completed: true,
        title: "dipiscing eli",
        videos:
          "https://player.vimeo.com/external/189417403.sd.mp4?s=f10416ccbbeed95005d7b6b2c761cbcce69e5003&profile_id=164&oauth2_token_id=57447761"
      }
    ]
  },
  {
    id: "367458609854",
    title: "chpterthree title",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    lessons: [1, 2, 3]
  }
];

function CourseRegisteredDetail(props) {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    /*to be reafactored. move redux store */

    axios
      .get(
        `https://congn.sse.codesandbox.io/chapters/${props.location.state.courseid}`
      )
      .then((response) => setChapters(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!props.location.state) {
    {
      /*redirect the user with a reason; user must tge to this page from mycourses page other wise rerouted to mycourses*/
    }
    return <Redirect to={"/mycourses"} />;
  }

  return (
    <div className="wrapper wrapper-course-overview">
      {/* <SideNavBar>
        <div className="siderbar"></div>
      </SideNavBar> */}
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="container ">
            <h2 className="lead pt-3 pb-3">Course Overview</h2>
            {JSON.stringify(props.location.state)}

            <div className="row overview p-3">
              <div className="col-sm-12 col-md-3">
                <img
                  className="rounded"
                  width="100%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk21xbj_J86nfcsxL9AKVQLjCttQPVr3VFp8h64Mv334b3-Mm8slGXuMkj7Asez3KiCtY&usqp=CAU"
                  alt="course cover"
                />
              </div>
              <div className="col-md-5 col-sm-12">343t2g</div>
              <div className="col-md-4 col-sm-12">33g34g34g34g</div>
            </div>
          </div>

          <div className="container ">
            <h2 className="lead pt-3 pb-3">Available Chapters</h2>
            {chapters.map((chapter) => (
              <div className="row overview p-3 mt-2" key={chapter.id}>
                <div className="col-md-4">
                  <p className="lead">
                    {" "}
                    <a href="#">{chapter.title}</a>
                  </p>
                  <p className="">{chapter.about}</p>
                </div>
                <div className="col-md-4">
                  <h4>
                    {countCompleted(chapter.lessons, "completed", true)} of
                    {" " + chapter.lessons.length}
                  </h4>
                  <p>Items Complted</p>
                </div>
                <div className="col-md-4">
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      style={{ width: "90px", height: "90px" }}
                      value={percent(
                        chapter.lessons.length,
                        countCompleted(chapter.lessons, "completed", true)
                      )}
                      variant="determinate"
                      {...props}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                      >{`${percent(
                        chapter.lessons.length,
                        countCompleted(chapter.lessons, "completed", true)
                      )}%`}</Typography>
                    </Box>
                  </Box>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  );
}

export default CourseRegisteredDetail;
