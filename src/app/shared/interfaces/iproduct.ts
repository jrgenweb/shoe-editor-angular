export interface IProperty {
  id?: number;
  title: string;
  pathId: string;
  colors: IColor[];
}

export interface IColor {
  label: string;
  value: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  customization?: {
    textureFile: string;
    properties: IProperty[];
  };
}

export interface ISelectedProperty {
  pathId: string;
  title: string;
  color: string;
}
