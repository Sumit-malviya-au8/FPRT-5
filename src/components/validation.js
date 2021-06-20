
const validation = (values) => {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "First Name is required. Minimum length is 2";
  }
  if (!values.lastname) {
    errors.lastname = "Last Name is required. Minimum length is 2";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
  }
  if (!values.password) {
    errors.password = "password is required. Minimum length is 8";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be at least 8 characters with all other FPRT Conditions";
  }
  if (!values.about) {
    errors.about = "About is required. Minimum length is 2";
  }

  return errors;
};

export default validation;
