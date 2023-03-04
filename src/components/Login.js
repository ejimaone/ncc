import React from "react";

function Login() {
  return (
    <div className=" h-screen w-[90%] mx-auto  pt-40 md:pt-0 md:flex md:w-[100%]">
      <div className="md:bg-blue-500 md:w-[45%] md:h-screen md:pt-[30%] lg:pt-[15%] md:px-4  text-white">
        <p className=" mb-9 text-2xl text-blue-400 md:text-white">
          National Common Entrance Examinations
        </p>
        <p className="hidden md:block">
          The National Common Entrance Examination for admission into Junior
          Secondary School (JSS 1) of Federal Government Unity Colleges will be
          held throughout the country and other interested foreign countries.
        </p>
        <h2 className="hidden md:block my-4">Registration Process</h2>

        <ul className="list-disc ml-4 hidden md:flex md:flex-col gap-3">
          <li>Create account</li>
          <li>Make payment</li>
          <li>Enter pupil details</li>
          <li>Upload</li>
        </ul>
      </div>
      <div className="md:mx-auto md:my-auto ">
        <form>
          <p className="text-xl font-bold mb-6">Login </p>
          <p className=" font-light">
            Login with your email address & password.
          </p>
          <label htmlFor="email" className="block mb-2 mt-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block bg-blue-100 h-10 rounded w-full outline outline-gray-300 pl-4"
          />
          <label htmlFor="password" className="block mb-2 mt-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block bg-blue-100 h-10 rounded w-full outline outline-gray-300 pl-4"
          />
          <button className="w-full bg-blue-500 text-white h-12 rounded my-5 ">
            Login to account
          </button>
          <div className="flex justify-between">
            <p className="text-blue-500">Forgot password?</p>
            <p className="text-blue-500">Create account here!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
