import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="md:py-0 bg-gray-50 lg:mx-32 dark:bg-gray-900 lg:flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:w-1/2 md:h-screen lg:py-0">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-full">
            {/* <img className="w-full mb-2" src="" alt="front credit card" /> */}
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
                Create <span className="text-cyan-500">Merchant</span> Account
              </h1>
              <div className="space-y-2">
                <Label>Email or Phone Number</Label>
                <Input
                  placeholder="Valid Email or Phone Number"
                  className="ring-1"
                />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input placeholder="••••••••" className="ring-1" />
              </div>
              <div className="space-y-2">
                <Label>Comfirm Password</Label>
                <Input placeholder="••••••••" className="ring-1" />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center h-5"></div>
                <div className="flex items-center text-sm">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-500 dark:ring-offset-gray-800"
                  />
                  <label
                    htmlFor="terms"
                    className="font-light ml-2 text-gray-500 dark:text-gray-300"
                  >
                    {" "}
                    Accept the{" "}
                    <Link
                      className="font-medium text-cyan-500 hover:underline dark:text-cyan-500"
                      href="/auth/termsandconditions"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/auth"
                  className="font-medium text-cyan-500 hover:underline dark:text-cyan-500"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
