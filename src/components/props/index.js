const firstnameProp = {
  type: "text",
  name: "First Name",
  id: "firstname",
  placeholder: "Enter First Name",
  autoComplete: "given-name",
};
const lastnameProp = {
  type: "text",
  name: "Last Name",
  id: "lastname",
  placeholder: "Enter Last Name",
  autoComplete: "family-name",
};
const emailProp = {
  type: "email",
  name: "Email",
  id: "email",
  placeholder: "Enter Email",
  autoComplete: "email",
};
const emailUsernameProp = {
  type: "text",
  name: "Email or Username",
  id: "email",
  placeholder: "Enter Email or Username",
  autoComplete: "email",
};

const passwordProp = {
  type: "password",
  name: "Password",
  id: "password",
  placeholder: "Enter Password",
  autoComplete: "password",
};

const confirmPasswordProp = {
  type: "password",
  name: "Confirm Password",
  id: "password_confirmation",
  placeholder: "Confirm Password",
  autoComplete: "",
};

export { firstnameProp, lastnameProp, emailProp, passwordProp, confirmPasswordProp, emailUsernameProp };
