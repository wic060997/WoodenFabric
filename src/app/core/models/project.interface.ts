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
  tech: ProjectTech;
}

export interface ProjectTech {
  smartHome: boolean;
  heatPump: boolean;
  finishOptions: string[];
  photovoltaic?: boolean;
  ventilation?: string;
  windows?: string;
  roof?: string;
  insulation?: string;
}
