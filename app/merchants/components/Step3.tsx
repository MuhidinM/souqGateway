import React, { ChangeEvent } from "react";
import { Propsstep3 } from "@/types/types";
import { Textarea } from "@/components/ui/textarea";
import FileInput from "@/components/FileInput";
import { Label } from "@/components/ui/label";
import SelectMenu from "@/components/SelectMenu";

const Step3: React.FC<Propsstep3> = ({
  inputs,
  handleInputChange,
  options,
  handleFileInputChange,
}) => (
  <>
    <p className="text-lg">Business Documents</p>
    <div className="col-span-2">
      <Label htmlFor="message">Description of the Company</Label>
      <Textarea
        placeholder="Leave a description here."
        className="pb-24 md:pb-20"
        id="message"
      />
    </div>
    <div className="col-span-2">
    <SelectMenu placeholder="Type of Identification" options={options} />
    </div>
    <div className="col-span-2">
      <FileInput
        label=""
        title={"Identification (TIN or Memorandum of Agreement)"}
        value={inputs.identification}
        onChange={(file: File | null) =>
          handleFileInputChange("identification", file)
        }
      />
    </div>
    <div className="col-span-2">
      <FileInput
        label=""
        title={"Business Licence"}
        value={inputs.businessLicence}
        onChange={(file: File | null) =>
          handleFileInputChange("businessLicence", file)
        }
      />
    </div>
  </>
);

export default Step3;
