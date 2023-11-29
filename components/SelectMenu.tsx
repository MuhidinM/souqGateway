import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface OptionType {
  label: string;
  value: string;
}

interface OptionTypeArray {
  options: OptionType[];
  placeholder: string;
}

const SelectMenu = ({ options, placeholder }: OptionTypeArray) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder={placeholder} />
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
  );
};

export default SelectMenu;
