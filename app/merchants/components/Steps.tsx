"use client";
import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent } from "react";
import Step3 from "./Step3";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step4 from "./Step4";
import { InputState } from "@/types/types";
import { Options } from "@/constants";

const Steps: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [inputs, setInputs] = useState<InputState>({
    businessName: "",
    tinNo: "",
    dateOfEstablishment: "",
    caml: "",
    industry: "",
    category: "",
    region: "",
    city: "",
    kifleKetama: "",
    typeOfIdentification: "",
    woreda: "",
    Kebele: "",
    houseNo: "",
    friendlyLocaton: "",
    proof: null,
    description: "",
    businessLicence: null,
    identification: null,
    staffSize: "",
    monthlyAmount: "",
    bankAgrement: null,
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFileInputChange = (name: string, file: File | null) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: file,
    }));
  };

  const renderInputs = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            inputs={inputs}
            options={Options}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <Step2
            inputs={inputs}
            options={Options}
            handleInputChange={handleInputChange}
            handleFileInputChange={handleFileInputChange}
          />
        );
      case 3:
        return (
          <Step3
            inputs={inputs}
            options={Options}
            handleInputChange={handleInputChange}
            handleFileInputChange={handleFileInputChange}
          />
        );
      case 4:
        return <Step4 inputs={inputs} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl px-4 py-8 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          1
        </div>
        <div className="w-1/4 h-px bg-gray-300"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          2
        </div>
        <div className="w-1/4 h-px bg-gray-300"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 3
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          3
        </div>
        <div className="w-1/4 h-px bg-gray-300"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 4
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          4
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 my-12">{renderInputs()}</div>
      <div className="">
        <div className="divider"></div>
        {step > 1 && (
          <Button className={"mr-4"} onClick={handlePrev}>
            Go Back
          </Button>
        )}
        {step < 4 ? (
          <Button className={"mr-4"} onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button className={"mr-4"} onClick={() => console.log(inputs)}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Steps;
