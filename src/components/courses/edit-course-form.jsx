import { React, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function EditForm({
  editCourse,
  coursename,
  courseabout,
  value,
  handleChange
}) {
  const [course, setCourse] = useState(coursename);
  return (
    <form onSubmit={editCourse}>
      <div class="form-group">
        <label for="exampleFormControlInput1">Course Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          name="title"
          value={course.name}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Status</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="status"
        >
          <option>Draft</option>
          <option>Published</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Course Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        >
          {courseabout}
        </textarea>
        <FormControl component="fieldset" class="mt-3">
          <FormLabel component="legend">Course Type</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="Free" control={<Radio />} label="Free" />
            <FormControlLabel
              value="Premium"
              control={<Radio />}
              label="Premium"
            />
          </RadioGroup>
        </FormControl>
        <div class="form-group">
          <button type="submit" className="btn btn-info btn-lg">
            Edit
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditForm;
