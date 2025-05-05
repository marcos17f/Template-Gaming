import { StaticImageData } from "next/image";

export interface ITournament {
  id: number;
  box_price: number;
  thumb:StaticImageData;
  coming_time: string;
  title: string;
  subtitle: string;
  places: number;
  team_name:string;
  status:string;
  list_items: {
      id: number;
      img: StaticImageData;
      name: string;
      price: number;
  }[];
  live_link:string;
  active?: boolean;
}