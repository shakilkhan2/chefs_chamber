import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const github = new GithubAuthProvider();
  
  // error msg:
  const [error, setError] = useState({ isError: false, message: "" });

  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user?.uid) {
    return <Navigate to={from}></Navigate>;
  }
  const handleLogIn = (event) => {
    event.preventDefault();
    setError({ isError: false, message: "" });
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError({ isError: true, message: error.message });
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    setError({ isError: false, message: "" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError({ isError: true, message: error.message });
      });
  };

  //
  const handleGitHubSignIn = () => {
    setError({ isError: false, message: "" });
    signInWithPopup(auth, github)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError({ isError: true, message: error.message });
      });
  };
  //
  return (
    <form
      onSubmit={handleLogIn}
      className="bg-white border border-amber-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl text-amber-500 font-bold">
        Please Log in
      </h1>
      <hr className="w-[70%] mx-auto mt-2 border-amber-500" />
      <div className="text-center">
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] my-6 border border-amber-500"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] border border-amber-500"
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <button className="text-center border border-amber-500 bg-white text-amber-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-amber-500">
          Login
        </button>
        {error.isError && (
          <p className="my-8 text-red-600 text-xs text-center">
            {error.message}
          </p>
        )}
        <p>
          <small>
            Don’t have an account?{" "}
            <span className="text-amber-500 hover:underline">
              <Link to="/register">Create an account.</Link>
            </span>
          </small>
        </p>
      </div>
      <div className="flex w-full px-4 mt-4">
        <div
          onClick={handleGoogleSignIn}
          className="grid h-15 flex-grow hover:border border-amber-500 cursor-pointer card bg-base-300  place-items-center"
        >
          <div className="flex items-center">
            <FaGoogle /> <p className="ml-2">Continue with Google</p>
          </div>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div
          onClick={handleGitHubSignIn}
          className="grid h-15 flex-grow hover:border border-amber-500 cursor-pointer card bg-base-300  place-items-center"
        >
          <div className="flex items-center">
            <FaGithub /> <p className="ml-2">Continue with Github</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
