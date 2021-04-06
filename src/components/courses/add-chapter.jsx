import { React, useState } from "react";
import "./courses.css";
import Stepper from "@material-ui/core/Stepper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddChapterForm from "./add-chapter-form";
import AddChapterItemsForm from "./addChapterItemsForm";

const currencies = [
  {
    value: "USD",
    label: "my new course"
  },
  {
    value: "EUR",
    label: "scelerisque dui viverra id"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    },
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
function getSteps() {
  return ["Add Course Chapter", "Chapter Lesson"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddChapterForm />;
    case 1:
      return <AddChapterItemsForm />;

    default:
      return "Unknown step";
  }
}

function AddChapter(props) {
  const [currency, setCurrency] = useState("EUR");
  const [value, setValue] = useState("Controlled");
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            {JSON.stringify(props.location.state.courseid)}
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent className={"p-5"}>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddChapter;
