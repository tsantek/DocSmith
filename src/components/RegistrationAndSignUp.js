import React, { Component } from "react";
import Footer from "./Footer";
import "../customStyles/RegistrationAndSignUp.css";

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
    let storage = [];
    if (localStorage.getItem("user")) {
      storage = JSON.parse(localStorage.getItem("user"));
      let newArr = storage.concat(user);
      localStorage.setItem("user", JSON.stringify(newArr));
    } else {
      localStorage.setItem("user", JSON.stringify([user]));
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Footer />
        <div className="main">
          <div className="container form_wrapper bg-light">
            <div className="row signin">
              <form className="col-7">
                <h3 className="my-5">Sign In</h3>
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
                  <input
                    className="action btn btn-dark btn-block"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <div className="col">ddd</div>
            </div>
            <div className="row register">
              <form className="col-7" onSubmit={e => this.handleSubmit(e)}>
                <h3 className="my-5">Sign Up</h3>
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
                  <input
                    className="action btn btn-dark btn-block"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="col-3">ddd</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
