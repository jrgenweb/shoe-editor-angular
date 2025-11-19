import { ISelectedProperty } from './iproduct';

export interface ICart {
  total: number;
  items: ICartItem[];
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  textureFile?: string;
  customization?: ISelectedProperty[];
}
