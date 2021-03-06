import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router";

class ForgotPassword extends Component {
  state = {
    account: { email: "" },
    passwordChanged: false
  };
  forgot = (e) => {
    e.preventDefault();
    // email cannot be empty
    const account = { ...this.state.account };

    // make request to backend and process result;
    axios({
      method: "post",
      url: `${process.env.REACT_APP_ENDPOINT}` + "users/forget-password",
      data: account
    }).then((response) => {
      toast(response.data.message);

      account.email = "";
      this.setState({ account: account, passwordChanged: true });
      // redirect user login page
    });
  };
  handleChange = ({ target }) => {
    const account = { ...this.state.account };
    account[target.name] = target.value;
    this.setState({ account });
  };
  render() {
    if (this.state.passwordChanged) {
      return (
        <Redirect
          push
          to={{
            pathname: "/login",
            state: { referrer: "/forget-password" }
          }}
        />
      );
    }
    return (
      <div className="login-wrapper">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-8 m-auto pt-5">
              <ToastContainer></ToastContainer>
              <h1 className=" pt-2 pb-2">Fogot Password</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <form onSubmit={this.forgot} className="pt-2">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
