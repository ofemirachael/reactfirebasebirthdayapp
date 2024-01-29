import React, { useState } from "react";
import { push, ref } from "firebase/database";
import { db, auth } from "../../firebase-config";
import Label from "../Label";
import Input from "../Input";
import Submit from "../Submit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  let handleLastName = (event) => {
    setLastName(event.target.value);
  };

  let handledob = (event) => {
    setDob(event.target.value);
  };

  let handleemail = (event) => {
    setEmail(event.target.value);
  };

  let handlePassword = (event) => {
    setPassword(event.target.value);
  };

  function postToFirebase(event) {
    event.preventDefault();
    const usersRef = ref(db, "/users");
    const usersitem = {
      firstName,
      lastName,
      dob,
      email,
      password,
    };

    push(usersRef, usersitem);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    console.log("posted");
    setFirstName("");
    setLastName("");
    setDob("");
    setEmail("");
    setPassword("");
    alert("Thank you for registering on the birthday app, you can now login");
    return navigate("/");
  }
  return (
    <div className="main">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-5 mr-3 ml-3 col-sm-12 card p-5 shadow rounded">
            <h1 className="text-center">Sign up</h1>
            <form>
              <div className="mb-1">
                <Label for="firstName" label="First Name" />
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  func={handleFirstName}
                />
              </div>

              <div className="mb-1">
                <Label for="lastName" label="Last Name" />
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  func={handleLastName}
                />
              </div>

              <div className="mb-1">
                <Label for="dob" label="Date of Birth" />
                <Input
                  type="date"
                  id="dob"
                  placeholder="Date of Birth"
                  value={dob}
                  func={handledob}
                />
              </div>
              <div className="mb-1">
                <Label for="email" label="Email" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  func={handleemail}
                />
              </div>
              <div className="mb-1">
                <Label for="password" label="Password" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  func={handlePassword}
                />
              </div>
              <div className="mt-4">
                <Submit
                  type="submit"
                  classname="btn btn-success  btn-block"
                  value="Sign Up"
                  func={postToFirebase}
                />
              </div>
            </form>

            <p className="text-center mt-3">
              Already have an account
              <Link to="/"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
