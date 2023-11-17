import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative bg-black">
        <img
          src=""
          className="absolute inset-0 object-cover w-full h-full"
          alt="image"
        />
        <div className="relative bg-opacity-30">
          <svg
            className="absolute inset-x-0 text-white dark:text-gray-900 -bottom-1"
            viewBox="0 0 1160 163"
          >
            <path
              fill="none"
              stroke="black"
              strokeWidth="2"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13"
            />
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>

          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div>
              <div className="w-full max-w-xl xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 dark:bg-gray-800">
                  <div className={`space-y-4 relative  md:space-y-4`}>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>

                    <form>
                      <div className="my-2">
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Username
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          //   value={props.values.username}
                          //   onChange={props.handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="username"
                          //   required=""
                        />
                      </div>
                      <div className="my-2">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        {/* <span className="text-sm link-error">
                          {props.errors.password && props.touched.password
                            ? props.errors.password
                            : null}
                        </span> */}
                        <input
                          type="password"
                          name="password"
                          id="password"
                          //   value={props.values.password}
                          //   onChange={props.handleChange}
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          //   required=""
                        />
                      </div>
                      <div className="flex items-center justify-between my-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                              //   required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="remember"
                              className="text-gray-500 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <Link
                          href="/auth/recover"
                          className="text-sm font-medium text-primary hover:underline dark:text-primary"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <button
                        type="submit"
                        // onClick={props.handleSubmit}
                        className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                      >
                        Sign in
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                        Don’t have an account yet?
                        <Link
                          href="/auth/registration"
                          className="font-medium text-primary hover:underline dark:text-primary"
                        >
                          Sign up
                        </Link>
                      </p>

                      {/* <div className="form-group">
                        <div className={} role="alert"></div>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
