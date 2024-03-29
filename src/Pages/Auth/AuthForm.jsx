import React, { useState, useRef, useContext , useEffect } from "react";
import classes from "./AuthForm.module.css";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToStore, setRedirectToStore] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (redirectToStore) {
      navigate("/store");
      setRedirectToStore(false);
    }
  }, [redirectToStore, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAl2_YxueOXJ1qrGvELlr54dx5z9ikQDTA";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAl2_YxueOXJ1qrGvELlr54dx5z9ikQDTA";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );

      authCtx.login(data.idToken, expirationTime.toISOString());

      console.log("Login successful. Redirecting to /store");
      setRedirectToStore(true);
    } catch (error) {
      console.error("Error during login:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form style={{ height: '350px' }} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input style={{ width: '100%' }} type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
