import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [userData, setUserData] = useState([]);
  const handleLoginChange = (e) => {
    // localStorage.setItem(e.target.name, e.target.value);
    const newUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(newUserData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("user"));
    if (
      users.find(
        (x) => x.email === userData.email && x.password === userData.password
      )
    ) {
      history.push("/welcome");
    } else {
      alert("please enter valid email & password");
    }
  };
  return (
    <>
      <div className="wrapper">
        <h3 className="login-heading">Login Form</h3>
        <form onSubmit={handleLoginSubmit} onChange={handleLoginChange}>
          <div className="login-mail">
            <label>Email: </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              value={userData.email}
            />
          </div>
          <div className="login-password">
            <label>Password:</label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              value={userData.password}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit">Login</button>
            <Link to="/register">
              {" "}
              <button>Register</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
