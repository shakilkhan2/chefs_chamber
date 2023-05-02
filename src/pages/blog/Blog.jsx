import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-amber-700 text-center mt-6 mb-2">
        Welcome to my blog
      </h1>
      <hr className="w-[40%] mx-auto mb-6 border-amber-700" />
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700 text-bold">a.</span> What is the differences
          between uncontrolled and controlled components?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans: </span>
          Uncontrolled components are form inputs in React that maintain their
          own internal state and do not receive any updates from the parent
          component. Controlled components, on the other hand, are form inputs
          that receive their value from the parent component and notify the
          parent component of any changes. In short, controlled components are
          more closely managed by the parent component, while uncontrolled
          components manage their own state.
        </p>
      </div>
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700 text-bold">b.</span> What is the differences
          between uncontrolled and controlled components?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans: </span>
          To validate React props using PropTypes, there are some specific steps
          to follow: <br /> <div className="my-2">
          1. Import the PropTypes library at the top of your file.{" "}
          <br /> 2. Define your component and include a propTypes property that
          specifies the types and shapes of the props that are expected. <br />{" "}
          3. When a prop does not conform to the specified type or shape, React
          will issue a warning in the console to alert you of the problem.</div> <br /> Using
          PropTypes helps to catch errors early and ensure that your components
          receive the correct types of props. It also provides documentation for
          other developers who may be using or modifying your code.
        </p>
      </div>
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700">1.</span> What is the differences
          between uncontrolled and controlled components?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans:</span>
          Uncontrolled components are form inputs in React that maintain their
          own internal state and do not receive any updates from the parent
          component. Controlled components, on the other hand, are form inputs
          that receive their value from the parent component and notify the
          parent component of any changes. In short, controlled components are
          more closely managed by the parent component, while uncontrolled
          components manage their own state.
        </p>
      </div>
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700">1.</span> What is the differences
          between uncontrolled and controlled components?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans:</span>
          Uncontrolled components are form inputs in React that maintain their
          own internal state and do not receive any updates from the parent
          component. Controlled components, on the other hand, are form inputs
          that receive their value from the parent component and notify the
          parent component of any changes. In short, controlled components are
          more closely managed by the parent component, while uncontrolled
          components manage their own state.
        </p>
      </div>
    </div>
  );
};

export default Blog;
