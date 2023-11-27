import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropsStep1 } from "@/types/types";

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
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Compliance of Anti Money Laundering" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Industry" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </>
);

export default Step1;
