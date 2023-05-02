import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaRegThumbsUp } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div className="grid h-15 flex-grow hover:border border-amber-500 cursor-pointer card bg-base-300  place-items-center">
          <div className="flex items-center">
            <FaGoogle /> <p className="ml-2">Continue with Google</p>
          </div>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-15 flex-grow hover:border border-amber-500 cursor-pointer card bg-base-300  place-items-center">
          <div className="flex items-center">
            <FaGithub /> <p className="ml-2">Continue with Github</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
