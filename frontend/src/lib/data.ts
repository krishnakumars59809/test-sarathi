import type { Product, Party, Transaction } from './types';

export const mockProducts: Product[] = [
  {
    product_id: 'prod_1',
    name: 'Parle-G Biscuit',
    purchase_price: 8,
    selling_price: 10,
    current_stock: 150,
    low_stock_threshold: 20,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    product_id: 'prod_2',
    name: 'Amul Milk',
    purchase_price: 25,
    selling_price: 28,
    current_stock: 40,
    low_stock_threshold: 10,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 20,
  },
  {
    product_id: 'prod_3',
    name: 'Sunfeast Dark Fantasy',
    purchase_price: 28,
    selling_price: 35,
    current_stock: 80,
    low_stock_threshold: 15,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 15,
  },
  {
    product_id: 'prod_4',
    name: 'Lays Chips',
    purchase_price: 16,
    selling_price: 20,
    current_stock: 200,
    low_stock_threshold: 50,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 10,
  },
];

export const mockParties: Party[] = [
  {
    party_id: 'party_1',
    name: 'Ankit Sharma',
    phone_number: '9876543210',
    type: 'CUSTOMER',
    current_balance: 250,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 50,
  },
  {
    party_id: 'party_2',
    name: 'Priya Patel',
    phone_number: '8765432109',
    type: 'CUSTOMER',
    current_balance: -150,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 45,
  },
  {
    party_id: 'party_3',
    name: 'Global Distributors',
    phone_number: '7654321098',
    type: 'SUPPLIER',
    current_balance: -5000,
    created_at: Date.now() - 1000 * 60 * 60 * 24 * 100,
  },
];

export const mockTransactions: Transaction[] = [
  {
    transaction_id: 'txn_1',
    type: 'SALE',
    amount: 50,
    product_name: 'Parle-G Biscuit',
    quantity: 5,
    timestamp: Date.now() - 1000 * 60 * 2,
  },
  {
    transaction_id: 'txn_2',
    type: 'CREDIT',
    amount: 100,
    party_name: 'Ankit Sharma',
    notes: 'For future purchases',
    timestamp: Date.now() - 1000 * 60 * 60,
  },
  {
    transaction_id: 'txn_3',
    type: 'STOCK_ADD',
    amount: 800,
    product_name: 'Lays Chips',
    quantity: 50,
    timestamp: Date.now() - 1000 * 60 * 60 * 3,
  },
  {
    transaction_id: 'txn_4',
    type: 'SALE',
    amount: 70,
    product_name: 'Sunfeast Dark Fantasy',
    quantity: 2,
    timestamp: Date.now() - 1000 * 60 * 60 * 5,
  },
  {
    transaction_id: 'txn_5',
    type: 'PAYMENT_MADE',
    amount: 2000,
    party_name: 'Global Distributors',
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
  },
];
