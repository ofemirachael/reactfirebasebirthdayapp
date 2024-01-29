import React, { useState } from "react";
import { auth } from "../../firebase-config";
import Label from "../Label";
import Input from "../Input";
import Submit from "../Submit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);

        return navigate("/birthday");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };
  return (
    <div className="main">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-5 mr-3 ml-3 col-sm-12 card p-5 shadow rounded">
            <h1 className="text-center">Login</h1>

            <form>
              <div className="mb-1">
                <Label for="loginEmail" label="Email" />
                <Input
                  type="email"
                  id="loginEmail"
                  placeholder="Email"
                  func={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <Label for="loginPassword" label="Password" />
                <Input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  func={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <Submit
                  type="submit"
                  classname="btn btn-primary  btn-block"
                  value="Log in"
                  func={onLogin}
                />
              </div>
            </form>

            <p className="text-center mt-3">
              Dont have an account?
              <Link to="/register"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
