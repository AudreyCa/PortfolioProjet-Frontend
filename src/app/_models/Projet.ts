import { Tag } from "./Tag";

export interface Projet {
  id: number;
  titre: string;
  resume: string;
  description: string;
  lien: string;
  images: string[];
  tags: Tag[];
}
