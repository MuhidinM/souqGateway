import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { PropsStep1 } from "@/types/types";
import SelectMenu from "@/components/SelectMenu";

const Step1: React.FC<PropsStep1> = ({
  inputs,
  options,
  handleInputChange,
}) => (
  <>
    <p className="col-span-2 text-lg">Business Information</p>
    <div className="">
      <Input
        title={"Business Name"}
        value={inputs.businessName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("businessName", e.target.value)
        }
      />
    </div>
    <div className="">
      <Input
        title={"TIN Number"}
        value={inputs.tinNo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("tinNo", e.target.value)
        }
      />
    </div>
    <div className="">
      <Input
        id={"dateOfEstablishment"}
        title={"Date Of Establishment"}
        name={"dateOfEstablishment"}
        type={"date"}
        value={inputs.dateOfEstablishment}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("dateOfEstablishment", e.target.value)
        }
      />
    </div>
    <div className="">
      <SelectMenu
        placeholder="Compliance of Anti Money Laundering"
        options={options}
      />
    </div>
    <div className="">
      <SelectMenu placeholder="Industry" options={options} />
    </div>
    <div className="">
      <SelectMenu placeholder="Category" options={options} />
    </div>
  </>
);

export default Step1;
