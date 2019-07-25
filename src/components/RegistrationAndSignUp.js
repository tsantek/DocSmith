import React, { Component } from "react";
import Footer from "./Footer";

export default class RegistrationAndSignUp extends Component {
  state = {
    users: [
      {
        name: "",
        email: "",
        password: "",
        pro: false
      }
    ]
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      pro: e.target.pro.checked,
      logedin: true
    };

    if (e.target.pro.checked) {
      localStorage.setItem("proUser", JSON.stringify(user));
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  render() {
    return (
      <div>
        <Footer />
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="container mt-5">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="form-group">
              <label className="mr-1" htmlFor="pro">
                Pro
              </label>
              <input type="checkbox" name="pro" id="pro" />
            </div>
            <div className="form-group">
              <input className="form-control" type="submit" value="SignIn" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
