import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-50 pt-36 md:pt-0 md:mt-0 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full space-y-4 p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don&apos;t fret! Just type in your email and we will send you a code
            to reset your password!
          </p>
          <Input placeholder={"name@company.com"} className={"w-full ring-1"} />
          <Button className={"w-full text-white"}>Reset password</Button>
        </div>
      </div>
    </section>
  );
};

export default page;
