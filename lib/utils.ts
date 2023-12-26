import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleInputChange = (
  index: number,
  inputRefs: React.MutableRefObject<HTMLInputElement[]>,
  event: React.ChangeEvent<HTMLInputElement>,
  setOtpValues: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const otp = event.target.value;
  if (!/^\d*$/.test(otp)) {
    return;
  }

  const updatedOtpValues = inputRefs.current.map((input, i) => {
    return i === index ? parseInt(otp, 10) : isNaN(parseInt(input.value, 10)) ? 0 : parseInt(input.value, 10);
  });
  setOtpValues(updatedOtpValues);

  inputRefs.current.forEach((input, i) => {
    if (i === index) {
      input.value = otp;
    } else if (i > index) {
      input.value = "";
    }
  });

  if (index < inputRefs.current.length - 1 && otp) {
    inputRefs.current[index + 1].focus();
  }
};

export const handlePaste = (
  inputRefs: React.MutableRefObject<HTMLInputElement[]>,
  event: React.ClipboardEvent<HTMLInputElement>,
  setOtpValues: React.Dispatch<React.SetStateAction<number[]>>
) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const otpCode = pastedText.slice(0, 6).replace(/\D/g, ''); // Remove non-digit characters

  const parsedOtpValues = otpCode.split('').map((char) => parseInt(char, 10));

  const updatedOtpValues = Array.from({ length: 6 }, (_, index) => parsedOtpValues[index] || 0);
  setOtpValues(updatedOtpValues);

  inputRefs.current.forEach((input, i) => {
    if (i < otpCode.length) {
      input.value = otpCode[i];
    } else {
      input.value = "";
    }
  });

  if (otpCode.length > 0) {
    inputRefs.current[otpCode.length - 1].focus();
  }
};
