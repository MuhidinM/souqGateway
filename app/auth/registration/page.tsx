import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="bg-gray-50 lg:mx-32 dark:bg-gray-900 lg:flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:w-1/2 md:h-screen lg:py-0">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-full">
            <img className="w-full mb-2" src="" alt="front credit card" />
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl sm:leading-none">
              Shop Now, Pay Later
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-900 md:text-lg dark:text-white">
              Experience the freedom of shopping with Buy Now, Pay Later. Shop
              now, pay later, and enjoy the convenience of flexible payments.
              Join us today and elevate your shopping experience. Indulge in
              what you love without compromise.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:w-1/2 md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create <span className="text-primary">Merchant</span> Account
              </h1>

              <form>
                <>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      User Name (Email or Phone Number)
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="Valid Email or Phone Number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center h-5">
                    </div>
                    <div className="flex items-center text-sm">
                      <input
                        id="acceptTerms"
                        name="acceptTerms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                      />
                      <label
                        htmlFor="terms"
                        className="font-light ml-2 text-gray-500 dark:text-gray-300"
                      >
                        {" "}
                        Accept the{" "}
                        <Link
                          className="font-medium text-primary hover:underline dark:text-primary"
                          href="/auth/termsandconditions"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/auth"
                      className="font-medium text-primary hover:underline dark:text-primary"
                    >
                      Login here
                    </Link>
                  </p>
                </>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
