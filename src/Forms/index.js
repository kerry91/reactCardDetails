import React from "react";
import Card from "./card";
import { connect } from "react-redux";

const ResumeForm = (props) => {
  function getSteps() {
    return ["Card"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Card/>;
      default:
        return "Unknown step";
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    let flag = true;

    if (flag) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  const handleEdit = () => {
    setCompleted({});
    setActiveStep(0);
  };

  return (
      <>
       {getStepContent(activeStep)}
       {handleBack} {handleStep} {handleComplete} {handleReset} {handleEdit}
      </>
  );
};
const mapStateToProps = (state) => ({
  cardFormData: state.card,
});

export default connect(mapStateToProps, {})(ResumeForm);
