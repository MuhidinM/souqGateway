import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Propsstep3 } from "@/types/types";
import { Textarea } from "@/components/ui/textarea";
import FileInput from "@/components/FileInput";
import { Label } from "@/components/ui/label";

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
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Type of Identification" />
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
