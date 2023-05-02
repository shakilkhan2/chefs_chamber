import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white border border-amber-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl text-amber-500 font-bold">
        Please Register
      </h1>
      <hr className="w-[70%] mx-auto mt-2 border-amber-500" />
      <div className="text-center">
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] my-6 border border-amber-500"
          type="text"
          name="name"
          id=""
          placeholder="Name"
        />{" "}
        <input
          className="mr-4 pl-2 py-3 w-[50%] mb-6 border border-amber-500"
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
        <input
          className="mr-4 pl-2 py-3 w-[50%] border border-amber-500 mt-6"
          type="text"
          name="photo"
          id=""
          placeholder="Photo Url"
        />{" "}
        <br />
        <button className="text-center  border border-amber-500 bg-white text-amber-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-amber-500">
          Register
        </button>
        <p>
          <small>
            Already have an account?{" "}
            <span className="text-amber-500 hover:underline">
              <Link to="/login">Login.</Link>
            </span>
          </small>
        </p>
      </div>
    </form>
  );
};

export default Register;
