import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function LoginCard() {
  return (
    <div className="w-full max-w-xl mt-8 xl:w-5/12">
      <div className="p-6 bg-white rounded shadow-2xl sm:p-10 dark:bg-gray-800">
        <div className="space-y-4 md:space-y-4">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div className="space-y-2">
            <Label>User Name</Label>
            <Input placeholder="John Doe" className="ring-1" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input placeholder="••••••••" className="ring-1" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <Link
              href={"/auth/forgotpassword"}
              className="text-sm font-medium text-cyan-500 hover:underline dark:text-cyan-500"
            >
              Forgot password?
            </Link>
          </div>
          <Button className={"w-full text-white"}>SIGN IN</Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don&apos;t have an account yet?
            <Link
              href={"/auth/registration"}
              className="font-medium ml-2 text-cyan-500 hover:underline dark:text-cyan-500"
            >
              Sign up
            </Link>
          </p>
          <div className="form-group">
            <div className={"hidden alert alert-success"} role="alert"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
