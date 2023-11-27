import React from "react";

export default function SnackbarNotification(props) {
  function SlideTransition(props) {
    return <Slide {...props} direction={props.slideDirection} />;
  }
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
      TransitionComponent={SlideTransition}
    >
      <Alert variant="filled" severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}
//open
//vertical
//horizontal
//message
//severity
//slideDirection
