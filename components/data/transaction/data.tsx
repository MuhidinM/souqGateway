import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "success",
    label: "Success",
    icon: CheckCircledIcon,
  },
  {
    value: "declined",
    label: "Declined",
    icon: CrossCircledIcon,
  },
];

export const types = [
  {
    label: "FT",
    value: "FT",
  },
];
