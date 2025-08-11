export type Product = {
  product_id: string;
  name: string;
  barcode?: string;
  purchase_price: number;
  selling_price: number;
  current_stock: number;
  low_stock_threshold: number;
  expiry_date?: number;
  created_at: number;
};

export type Party = {
  party_id: string;
  name: string;
  phone_number: string;
  type: "CUSTOMER" | "SUPPLIER";
  current_balance: number;
  created_at: number;
};

export type Transaction = {
  transaction_id: string;
  party_id?: string;
  party_name?: string;
  type:
    | "CREDIT"
    | "DEBIT"
    | "PAYMENT_RECEIVED"
    | "PAYMENT_MADE"
    | "SALE"
    | "STOCK_ADD";
  amount: number;
  notes?: string;
  related_product_ids?: string[];
  product_name?: string;
  quantity?: number;
  timestamp: number;
};
