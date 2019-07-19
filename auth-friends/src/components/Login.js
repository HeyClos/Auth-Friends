import React from "react";
import {Formik} from 'formik';
import {Form} from 'semantic-ui-react';

import moduleName from 'module'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login({ touched, errors }) {
  //const token = localStorage.getItem("token");
  return (
    <Formik
    initialValues={{
        username:'',
        password:''
    }}
            onSubmit={{values, actions}} => {
            actions.setSubmitting(true);
        }

   
        <Form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={props.handleSubmit}            <Form.Field
            control={Input}
            label='username'
            name='username'
            id='username'
            type='text'
            onChange={props.handleChange}
            width='4'
            />
            <Form.Field
            control={Input}
            label='password'
            name='password'
            id='password'
            type='text'
            onChange={props.handleChange}
            width='4'
            />
        />

    // <Form className="form">
    //   <div className="form-group">
    //     <label className="label">Email</label>
    //     <Field
    //       className="input"
    //       name="email"
    //       type="email"
    //       autoComplete="off"
    //     />
    //     <p>{touched.email && errors.email}</p>
    //   </div>
    //   <div className="form-group">
    //     <label className="label">Password</label>
    //     <Field
    //       className="input"
    //       name="password"
    //       type="password"
    //       autoComplete="off"
    //     />
    //   </div>
    //   <p>{touched.password && errors.password}</p>
    //   <button className="btn">Submit &rarr;</button>
    // </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, formikBag) {
    const url =
      "https://mock-users-server.herokuapp.com/api/auth";
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        formikBag.props.history.push("/profile");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }
})(Login);
