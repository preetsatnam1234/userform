import React, { useState } from "react";
import Joi from "joi-browser";

const schema = {
  name: Joi.string().required().min(5).max(30),
  email: Joi.string().required().email().min(7),
  password: Joi.string().required(),
  age: Joi.number().required().max(100),
};

function Registration() {
  const [errors, setErrors] = useState([]);
  const [usersReg, setUsersReg] = useState([]);
  const handleRegisterChange = (e) => {
    const newUser = { ...usersReg, [e.target.name]: e.target.value };
    setUsersReg(newUser);
    console.log(usersReg.password);
  };
  const [allUsersData, setAllUsersData] = useState([]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let result = Joi.validate(usersReg, schema, { abortEarly: false });
    if (result) {
      setErrors(result.error.details);
      return 0;
    }
    setErrors([]);
    console.log(result);
    setAllUsersData([...allUsersData, usersReg]);
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(allUsersData));
    }, 2000);
  };

  return (
    <>
      <div className="reg-wrapper">
        <h3 className="reg-heading">Registration Form</h3>
        <form onSubmit={handleRegisterSubmit} onChange={handleRegisterChange}>
          <div className="reg-name">
            <label>name:</label>
            <input type="text" name="name" value={usersReg.name} />
            <p class="errors">
              {" "}
              {errors &&
                errors.map((err) => err.path[0] === "name" && err.message)}
            </p>
          </div>
          <div className="reg-email">
            <label>email:</label>
            <input type="text" name="email" value={usersReg.email} />
            <p className="errors">
              {" "}
              {errors &&
                errors.map((err) => err.path[0] === "email" && err.message)}
            </p>
          </div>
          <div className="reg-password">
            <label>password:</label>
            <input type="password" name="password" value={usersReg.password} />
            <p class="errors">
              {" "}
              {errors &&
                errors.map((err) => err.path[0] === "password" && err.message)}
            </p>
          </div>
          <div className="reg-repassword">
            <label>confirm-password:</label>
            <input
              type="password"
              name="conPassword"
              value={usersReg.conPassword}
            />
          </div>
          <div className="reg-gender">
            <label>gender:</label>
            <div>
              <input type="radio" name="gender" value="male" />
              Male
              <input type="radio" name="gender" value="female" />
              Female
            </div>
          </div>
          <div className="reg-age">
            <label>age:</label>
            <input type="number" name="age" value={usersReg.age} />
            <p class="errors">
              {" "}
              {errors &&
                errors.map((err) => err.path[0] === "age" && err.message)}
            </p>
          </div>

          <button className="register-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
