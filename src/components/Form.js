import React, { useState } from "react";
import SignupForm from './SignupForm'
import { Success } from "./Success";

const Form = () => {

  const [formIsSubmitted, setFormIsSubmitted] =  useState(false)

  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  
  return (
    <div>
      (!formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <Success />)
    </div>
  );
};

export default Form;