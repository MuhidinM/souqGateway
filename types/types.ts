import { ReactElement } from "react";

export interface MenuItem {
  title: string;
  url: string;
  active: boolean;
}

export interface SideBarItem {
  name: string;
  label: string;
  icon: ReactElement;
  hide: boolean; // set the hidden value to true if you want to. U can use different var for different purposes.
  path: string;
  active: string;
}

export interface Feature {
  title: string;
  icon: ReactElement;
  description: string;
}

export interface InputState {
  businessName: string;
  tinNo: string;
  dateOfEstablishment: string;
  caml: string;
  industry: string;
  category: string;
  region: string;
  city: string;
  kifleKetama: string;
  typeOfIdentification: string;
  woreda: string;
  Kebele: string;
  houseNo: string;
  friendlyLocaton: string;
  proof: File | null;
  description: string;
  businessLicence: File | null;
  identification: File | null;
  staffSize: string;
  monthlyAmount: string;
  bankAgrement: File | null;
}

export interface PropsSettings {
  value: string;
  label: string;
}

export interface PropsStep1 {
  inputs: {
    businessName: string;
    tinNo: string;
    dateOfEstablishment: string;
    caml: string;
    industry: string;
    category: string;
  };
  options: { value: string; label: string }[];
  handleInputChange: (name: string, value: string) => void;
}

export interface PropsStep2 {
  inputs: {
    region: string;
    city: string;
    kifleKetama: string;
    woreda: string;
    Kebele: string;
    houseNo: string;
    friendlyLocaton: string;
    proof: File | null;
  };
  options: { value: string; label: string }[];
  handleInputChange: (name: string, value: string) => void;
  handleFileInputChange: (name: string, file: File | null) => void;
}
export interface Propsstep3 {
  inputs: {
    typeOfIdentification: string;
    identification: File | null;
    businessLicence: File | null;
    description: string;
  };
  options: { value: string; label: string }[];
  handleInputChange: (name: string, value: string) => void;
  handleFileInputChange: (name: string, file: File | null) => void;
}
export interface PropsStep4 {
  inputs: {
    businessName: string;
    tinNo: string;
    dateOfEstablishment: string;
    caml: string;
    industry: string;
    category: string;
    region: string;
    city: string;
    kifleKetama: string;
    woreda: string;
    Kebele: string;
    houseNo: string;
    friendlyLocaton: string;
    proof: File | null;
    description: string;
    typeOfIdentification: string;
    identification: File | null;
    businessLicence: File | null;
  };
}

export interface FileInputType {
  label: string;
  title: string;
  value: File | null; // Adding value prop of type File | null
  onChange?: (file: File | null) => void;
  error?: string;
}