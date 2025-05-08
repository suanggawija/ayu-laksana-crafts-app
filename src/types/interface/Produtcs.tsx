export interface Props {
  params: {
    id: number;
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category_id: number;
  category_name: string;
  price: number;
  status: string;
  stock: number;
  image_url: string;
}
