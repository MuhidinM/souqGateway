export interface ItemRequest {
  item_name: string;
  item_price: string;
  item_code: string;
  item_pic: File;
  item_type?: string;
  loan_limit?: string;
  totalQuantity: string;
  totalBuyPrice: string;
  onStock?: string;
  unitPrice: string;
  user_id?: string;
  created_by?: string;
  itemStatus?: string;
  reorderPointUnit: string;
  purchaseDate: string;
  supplier?: string;
  location?: string;
  description?: string;
  item_category_id: string;
}

export interface ItemResponse {
  item_id?: number;
  item_name: string;
  item_price: string;
  item_code: string;
  item_pic: string;
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
