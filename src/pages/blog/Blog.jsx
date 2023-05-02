import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-amber-700 text-center mt-6 mb-2">
        Welcome to our blog
      </h1>
      <hr className="w-[40%] mx-auto mb-6 border-amber-700" />
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700 font-bold">a.</span> What is the
          differences between uncontrolled and controlled components?
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
          <span className="text-amber-700 font-bold">b.</span> How to validate
          React props using PropTypes?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans: </span>
          To validate React props using PropTypes, there are some specific steps
          to follow: <br />{" "}
          <div className="my-2">
            1. Import the PropTypes library at the top of your file. <br /> 2.
            Define your component and include a propTypes property that
            specifies the types and shapes of the props that are expected.{" "}
            <br /> 3. When a prop does not conform to the specified type or
            shape, React will issue a warning in the console to alert you of the
            problem.
          </div>{" "}
          <br /> Using PropTypes helps to catch errors early and ensure that
          your components receive the correct types of props. It also provides
          documentation for other developers who may be using or modifying your
          code.
        </p>
      </div>
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700 font-bold">c.</span> What is the basic
          difference between nodejs and express js?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans:</span>
          Node.js and Express.js are both server-side JavaScript frameworks, but
          there are some key differences between the them:
          <br />
          <div className="my-2">
            - Node.js is a runtime environment for executing JavaScript code
            outside of a web browser, while Express.js is a web application
            framework built on top of Node.js that simplifies the process of
            building web applications and APIs. <br />
            <span className="">
              - Node.js provides a core set of modules and APIs for building
              server-side applications, including file system, networking, and
              HTTP modules. Express.js builds on top of these core modules to
              provide additional features and functionality, such as routing,
              middleware, and view rendering.
            </span>{" "}
            <br />
            - While Node.js can be used to build a wide variety of server-side
            applications, including web applications, APIs, and real-time
            systems, Express.js is specifically designed for building web
            applications and APIs. <br />- Express.js provides a lightweight and
            flexible framework for building web applications, allowing
            developers to choose their own libraries and tools for various parts
            of the application stack. Node.js, on the other hand, provides a
            more low-level platform that requires more manual configuration and
            setup.
          </div>{" "}
          <br />
          In summary, Node.js is a runtime environment for executing JavaScript
          code, while Express.js is a web application framework built on top of
          Node.js that simplifies the process of building web applications and
          APIs.
        </p>
      </div>
      <div className="mx-32 mb-6">
        <h2 className="text-2xl  text-amber-500">
          <span className="text-amber-700 font-bold">d.</span> What is a custom
          hook, and why will you create a custom hook?
        </h2>
        <p>
          <span className="text-xl text-amber-700">Ans:</span>A custom hook is a
          JavaScript function that uses the React Hooks API to encapsulate
          reusable logic that can be shared across multiple components in a
          React application. Custom hooks allow you to extract common
          functionality into a single location and avoid duplication of code
          across your components. Here are some reasons why you might want to
          create a custom hook:
          <div className="my-2">
            - Reusability: If you find yourself using the same code pattern or
            logic in multiple components, creating a custom hook can make it
            easier to reuse that code in other parts of your application. <br />
            - Abstraction: By creating a custom hook, you can abstract away
            complex or repetitive logic, making your components easier to read
            and understand. <br />- Composition: Custom hooks can be composed
            together to create more complex behavior. For example, you might
            have one custom hook that handles state management and another that
            handles API calls, and you can combine them to create a more
            advanced hook that handles both. <br />- Testing: By encapsulating
            logic in a custom hook, you can more easily test that code in
            isolation from your components, improving the overall testability of
            your application.
          </div>
          In summary, custom hooks are a powerful tool for encapsulating
          reusable logic in a React application, and can help to improve code
          reusability, abstraction, composition, and testing.
        </p>
      </div>
    </div>
  );
};

export default Blog;
