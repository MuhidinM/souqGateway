import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { PropsStep2 } from "@/types/types";
import FileInput from "@/components/FileInput";
import SelectMenu from "@/components/SelectMenu";

const Step2: React.FC<PropsStep2> = ({
  inputs,
  options,
  handleInputChange,
  handleFileInputChange,
}) => (
  <>
    <p className="col-span-2 text-lg">Business Address</p>
    <div className="">
      <SelectMenu placeholder="Region" options={options} />
    </div>
    <div className="">
      <SelectMenu placeholder="City" options={options} />
    </div>
    <div className="">
      <SelectMenu placeholder="Kifle Ketema" options={options} />
    </div>
    <div className="">
      <SelectMenu placeholder="Woreda" options={options} />
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
