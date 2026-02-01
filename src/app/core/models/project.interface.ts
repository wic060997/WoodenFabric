import {ProjectCategory} from '../enums/project-category';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  price: string;
  mainImages: string[];
  area: number;
  rooms: number;
  height: number;
  description: string;
  gallery: string[];
  schemas: string[];
  features: string[];
  tech: {
    smartHome: boolean;
    heatPump: boolean;
    finishOptions: string[];
  };
}
