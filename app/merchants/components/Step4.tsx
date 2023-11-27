import { PropsStep4 } from "@/types/types";
import React from "react";

const Step4: React.FC<PropsStep4> = ({ inputs }) => (
  <>
    <p className="col-span-2 mb-3 text-2xl font-bold">Business Information</p>
    <div className="">
      <p className="col-span-2 text-lg">Business Name: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">TIN Number: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Date Of Establishment: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Compliance Of Money Laundery: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Industry: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Category: {}</p>
    </div>
    <div className="col-span-2 divider"></div>
    <p className="col-span-2 mb-3 text-2xl font-bold">Business Address</p>
    <div className="">
      <p className="col-span-2 text-lg">Region: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">City: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Kifle Ketema: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Woreda: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Kebele: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">House Number: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Friendly Location: {}</p>
    </div>
    <div className="col-span-2">
      <p className="col-span-2 text-lg">Proof of Address: {}</p>
      {/* <img src="" alt="" /> */}
    </div>
    <p className="col-span-2 mb-3 text-2xl font-bold">Business Documents</p>
    <div className="col-span-2">
      <p className="col-span-2 text-lg">Descirption of the company: {}</p>
    </div>
    <div className="">
      <p className="col-span-2 text-lg">Type of Identification: {}</p>
    </div>
    <div className="col-span-2">
      <p className="col-span-2 text-lg">
        Identification (TIN or Memorandum of Agreement): {}
      </p>
      {/* <img src="" alt="" /> */}
    </div>
    <div className="col-span-2">
      <p className="col-span-2 text-lg">Business Licence: {}</p>
      {/* <img src="" alt="" /> */}
    </div>
  </>
);
export default Step4;
