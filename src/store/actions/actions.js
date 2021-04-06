import axios from "axios";

//
export function getUser(payload) {
  return {
    type: "GET_USER",
    payload
  };
}

export function getComments(sectionid) {
  const url = `${process.env.REACT_APP_ENDPOINT}comments/${sectionid}`;

  return (dispatch) => {
    dispatch({ type: "GET_COMMENTS" });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "GET_COMMENTS_SUCCESS", payload: response.data });
      })
      .catch(function (error) {
        // handle error
        dispatch({ type: "GET_COMMENTS_ERROR", payload: error });
      });
  };
}
//COURSES GET ALL COURSES FROM DB

export function getCourses() {
  return (dispatch) => {
    dispatch({ type: "GET_COURSES" });
    axios
      .get("https://congn.sse.codesandbox.io/courses")
      .then((response) => {
        dispatch({ type: "GET_COURSE_SUCCESS", payload: response.data });
      })
      .catch(function (error) {
        // handle error
        dispatch({ type: "GET_COURSE_ERROR", payload: error });
      });
  };
}

/* get courses chapters based on course
 ID */

/* filter Courses  based on learning focus and skills levell */
export function filterCourse(learningFocus, skillLevel, payload) {
  return {
    type: "FILTER_COURSE",
    payload: { learningFocus, skillLevel }
  };
}

export function getCourseChapters(courseid) {
  const endpoint = `https://congn.sse.codesandbox.io/courses/${course._id}/chapters`;
  return (dispatch) => {
    dispatch({ type: "GET_COURSE_CHAPTERS" });
    axios
      .get(endpoint)
      .then((response) => {
        dispatch({
          type: "GET_COURSE_CHAPTERS_SUCCESS",
          payload: response.data
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({ type: "GET_COURSE_CHAPTERS_ERROR", payload: error });
      });
  };
}

export function addCourseUserSubscriptionList(course, userid) {
  return (dispatch) => {
    dispatch({ type: "ADD_COURSE_USER_SUBSCRIPTION_lIST" });
    //endpoint https://congn.sse.codesandbox.io/users/604184064ee57d012c71c127/add-subscribe/60406b49eb71d80243e87317
    axios
      .post(
        `https://congn.sse.codesandbox.io/users/${userid}/add-subscribe/${course._id}`,
        {
          course,
          userid
        }
      )
      .then((response) => {
        if (response.data.error) {
          dispatch({
            type: "ADD_COURSE_USER_SUBSCRIPTION_lIST_ERROR",
            payload: response.data.error
          });
        } else {
          console.log(response);
          dispatch({
            type: "ADD_COURSE_USER_SUBSCRIPTION_lIST_SUCCESS",
            payload: response.data.data
          });
        }
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: "ADD_COURSE_USER_SUBSCRIPTION_lIST_ERROR",
          payload: error
        });
      });
  };
}

/** remove user course from registered/ subscribe courses */
export function removeUserCourse(courseid, userid) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_COURSE_USER_SUBSCRIBED" });
    const url = `https://congn.sse.codesandbox.io/users/${userid}/remove-subscribe/${courseid}`;

    axios
      .post(url, {
        userid,
        courseid
      })
      .then((response) => {
        if (response.data.error) {
          dispatch({
            type: "REMOVE_COURSE_USER_SUBSCRIBED_ERROR",
            payload: response.data.error
          });
        } else {
          console.log(response);
          dispatch({
            type: "REMOVE_COURSE_USER_SUBSCRIBED_SUCCESS",
            payload: response.data
          });
        }
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: "REMOVE_COURSE_USER_SUBSCRIBED_ERROR",
          payload: error
        });
      });
  };
}
/** check a course is in a user's list of registered courses */

export function isRegisteredToCourse(courseId) {
  return {
    type: "IS_USER_REGISTERED_TO_COURSE",
    payload: courseId
  };
}
