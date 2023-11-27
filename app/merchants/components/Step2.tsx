import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropsStep2 } from "@/types/types";
import FileInput from "@/components/FileInput";

const Step2: React.FC<PropsStep2> = ({
  inputs,
  options,
  handleInputChange,
  handleFileInputChange,
}) => (
  <>
    <p className="col-span-2 text-lg">Business Address</p>
    <div className="">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Region" />
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
          <SelectValue placeholder="City" />
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
          <SelectValue placeholder="Kifle Ketema" />
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
          <SelectValue placeholder="Woreda" />
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
      <Input
        title={"Kebele"}
        value={inputs.Kebele}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("Kebele", e.target.value)
        }
      />
    </div>
    <div className="">
      <Input
        title={"House Number"}
        value={inputs.houseNo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("houseNo", e.target.value)
        }
      />
    </div>
    <div className="col-span-2">
      <Input
        title={"Friendly Location"}
        value={inputs.friendlyLocaton}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("friendlyLocaton", e.target.value)
        }
      />
    </div>
    <div className="col-span-2">
      <FileInput
        label="proof"
        title={"Proof of Address"}
        value={inputs.proof}
        onChange={(file: File | null) => handleFileInputChange("proof", file)}
      />
    </div>
  </>
);

export default Step2;
