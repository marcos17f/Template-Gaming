import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  img: StaticImageData;
  title: string;
  price: number;
  category: string;
  description: string;
  status: string;
  rating?: number;
}