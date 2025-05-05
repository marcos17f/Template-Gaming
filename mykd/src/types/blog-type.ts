import { StaticImageData } from "next/image";

export interface IBlog {
  id: number;
  img: StaticImageData;
  author: string;
  date: string;
  comments: number;
  title: string;
  desc: string;
}