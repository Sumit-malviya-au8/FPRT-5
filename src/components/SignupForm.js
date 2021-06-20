import React, { useState, useEffect } from "react";
import validation from "./validation";

const SignupForm = ({submitForm}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    about: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [ dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
  }, [errors])
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Signup Form</h2>
        </div>
        <form className="form-wrapper">
          <div className="firstname">
            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>
          <div className="lastname">
            <label className="label">Last Name</label>
            <input
              type="text"
              className="input"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="about">
            <label className="label">About</label>
            <input
              type="text"
              className="input"
              name="about"
              value={values.about}
              onChange={handleChange}
            />
            {errors.about && <p className="error">{errors.about}</p>}
          </div>
          <div className="image">
            <label className="label">Profile Image</label>
            <input
              type="image"
              className="input"
              name="image"
              value={values.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
