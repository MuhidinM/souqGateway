"use client";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { handleInputChange, handlePaste } from "@/lib/utils";
import { Input } from "./ui/input";

interface OtpTypes {
  discription: ReactElement;
}

function OTP({ discription }: OtpTypes) {
  const [otpValues, setOtpValues] = useState<number[]>([]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    // Focus the first input field when the component mounts
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        const activeElement = document.activeElement as HTMLElement;
        const activeIndex = inputRefs.current.findIndex(
          (ref) => ref === activeElement
        );

        if (activeIndex >= 0) {
          if (inputRefs.current[activeIndex].value === "" && activeIndex > 0) {
            // Move to the previous input field if the current field is empty
            inputRefs.current[activeIndex - 1].focus();
          } else {
            // Delete the value in the current input field
            inputRefs.current[activeIndex].value = "";

            // Move to the previous input field
            if (activeIndex > 0) {
              inputRefs.current[activeIndex - 1].focus();
            }
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="text-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            OTP Verification
          </h1>
          {discription}
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="otp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                OTP Code
              </label>
              <div className="flex flex-row items-center justify-between w-full max-w-xs py-4 mx-auto space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div className="w-16 h-16" key={i}>
                    <Input
                      type="text"
                      name="otp"
                      id={`otp-${i}`}
                      maxLength={1}
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      ref={(ref) => {
                        if (ref) {
                          inputRefs.current[i] = ref!;
                        }
                      }}
                      onChange={(event) =>
                        handleInputChange(i, inputRefs, event, setOtpValues)
                      }
                      onPaste={(event) =>
                        handlePaste(inputRefs, event, setOtpValues)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                <p>Didn&apos;t receive the code?</p>{" "}
                <a
                  className="flex flex-row items-center text-primary"
                  href="http://"
                  target="popup"
                  onClick={() =>
                    window.open(
                      "http://",
                      "popup",
                      "width=600,height=600,scrollbars=no,resizable=no"
                    )
                  }
                  rel="noopener noreferrer"
                >
                  Resend
                </a>
              </div>
            </div>
            <Button className={"w-full"}>Confirm</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default OTP;
// call using this code

// import OTP from "@/components/OTP";
// import React from "react";

// const page = () => {
//   return (
//     <div className="">
//       <OTP
//         discription={
//           <p className="font-light text-gray-500 dark:text-gray-400">
//             Your One Time Password or OTP has been sent to your mobile phone.
//             Please retrieve it and enter in the space below.
//             <b> Note:</b> This token can be used only once and would expire in 5
//             minutes.
//           </p>
//         }
//       />
//     </div>
//   );
// };

// export default page;