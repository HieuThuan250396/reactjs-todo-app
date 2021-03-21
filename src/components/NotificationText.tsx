import React from "react";
import { connect } from "react-redux";

interface Props {
  errorText: String;
  message: String;
}

const NotificationText: React.FC<Props> = (props: any) => {
  return (
    <>
      <p id="message" style={{ color: 'red' }}>{props.errorText}</p>
      <p id="error" style={{ color: 'green' }}>{props.message}</p>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { errorText, message } = state.errorReducers;

  return { errorText, message };
};

export default connect(mapStateToProps)(NotificationText);
