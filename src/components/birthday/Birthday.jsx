import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Isbirthday from "../isbirthday/Isbirthday";
import Notbirthday from "../notbirthday/Notbirthday";
import { ref, onValue } from "firebase/database";

const Birthday = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [leftDay, setLeftDay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      const currentUser = auth.currentUser;
      const userEmail = currentUser.email;
      if (user) {
        const currentUserRef = ref(db, "users/");
        onValue(currentUserRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          Object.values(data).forEach((obj) => {
            if (obj.email === userEmail) {
              console.log(obj.dob);
              let bname = obj.firstName + " " + obj.lastName;
              let today = new Date();
              let bday = new Date(obj.dob);
              let upcomingBday = new Date(
                today.getFullYear(),
                bday.getMonth(),
                bday.getDate()
              );
              setName(bname);
              if (today > upcomingBday) {
                upcomingBday.setFullYear(today.getFullYear() + 1);
              }
              let one_day = 24 * 60 * 60 * 1000;
              let daysLeft = Math.ceil(
                (upcomingBday.getTime() - today.getTime()) / one_day
              );
              console.log(daysLeft);
              setLeftDay(daysLeft);
              fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((quote) => {
                  const indx = Math.floor(Math.random() * quote.length);
                  setQuote(quote[indx].text);
                  setAuthor(quote[indx].author);
                  setIsLoading(false);
                });
            }
          });
        });
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  console.log(leftDay);
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 ">
              <div className="d-flex justify-content-end">
                <button
                  id="logoutbtn"
                  className="btn btn-warning text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              <div className="jumbotron">
                {isLoading ? (
                  <h1 className="text-center">Loading...</h1>
                ) : leftDay === 365 ? (
                  <Isbirthday username={name} quote={quote} author={author} />
                ) : (
                  <Notbirthday leftDay={leftDay}></Notbirthday>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
