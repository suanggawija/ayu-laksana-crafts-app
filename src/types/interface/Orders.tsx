export interface Orders {
  id: number;
  order_number: string;
  status: string;
  payment_status: string;
  total_amount: number;
}

export interface OrderDetail {
  product_id: number;
  product_name: string;
  quantity: number;
  price: string;
  subtotal: number;
}

export interface Order {
  id: number;
  order_number: string;
  user_id: number;
  username: string;
  shipping_address: string;
  shipping_city: string;
  shipping_state: string;
  shipping_country: string;
  shipping_postal_code: string;
  payment_method: string;
  notes: string;
  total_amount: number;
  status: string;
  payment_status: string;
  shipped_at: string | null;
  delivered_at: string | null;
  cancelled_at: string | null;
  completed_at: string | null;
  order_detail: OrderDetail[];
}
