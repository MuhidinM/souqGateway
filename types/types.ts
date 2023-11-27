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

export interface Items {
  item_id?: number;
  item_name: string;
  item_price: string;
  item_code: string;
  item_pic: File | string;
  item_type?: string;
  loan_limit?: string;
  totalQuantity: string;
  totalBuyPrice: string;
  onStock?: string;
  unitPrice: string;
  user_id?: string;
  created_by?: string;
  itemStatus?: string;
  status?: boolean;
  reorderPointUnit: string;
  purchaseDate: string;
  supplier?: string;
  location?: string;
  description?: string;
  item_category_id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ItemCategory {
  type: string;
}

export interface PaymentService {
  payment_service_id?: number;
  payment_service_name: string;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {}

export interface KYC {
  first_name: string;
  last_name: string;
  business_name: string;
  business_type: string;
  website_url: string;
  tin_number: string;
  business_address: string;
  compliance_aml: string;
  merchant_status: string;
  user_id: string;
  rbf: string;
  business_license: File | string;
  agreement_doc: File | string;
  valid_identification: File | string;
}

export interface Sales {
  sales_id?: string;
  username: string;
  firstName: string;
  lastName: string;
  password?: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Items {
  item_id?: number;
  item_name: string;
  item_price: string;
  item_code: string;
  item_pic: File | string;
  item_type?: string;
  loan_limit?: string;
  totalQuantity: string;
  totalBuyPrice: string;
  onStock?: string;
  unitPrice: string;
  user_id?: string;
  created_by?: string;
  itemStatus?: string;
  status?: boolean;
  reorderPointUnit: string;
  purchaseDate: string;
  supplier?: string;
  location?: string;
  description?: string;
  item_category_id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ItemCategory {
  type: string;
}

export interface PaymentService {
  payment_service_id?: number;
  payment_service_name: string;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {}

export interface KYC {
  first_name: string;
  last_name: string;
  business_name: string;
  business_type: string;
  website_url: string;
  tin_number: string;
  business_address: string;
  compliance_aml: string;
  merchant_status: string;
  user_id: string;
  rbf: string;
  business_license: File | string;
  agreement_doc: File | string;
  valid_identification: File | string;
}

export interface Sales {
  sales_id?: string;
  username: string;
  firstName: string;
  lastName: string;
  password?: string;
}

export interface Login {
  username: string;
  password: string;
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