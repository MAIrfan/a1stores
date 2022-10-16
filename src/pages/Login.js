import React from "react";
import { Field, reduxForm } from "redux-form";

function Login({ handleSubmit }) {
  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="enter email here"
        />
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="enter password here"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: "loginForm",
  onSubmit: (values, dispatch) => console.log(values),
})(Login);

export default withReduxForm;
