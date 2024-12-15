import { StaticImageData } from 'next/image';

export interface HouseItem {
  id: number;
  image: StaticImageData;
  title: string;
  location: string;
  labels: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
}