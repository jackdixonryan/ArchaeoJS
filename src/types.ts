
export interface CharacterOptions { 
  name: string;
  email: string;
  skillMatrix?: SkillMatrix;
}

export interface Daemon {
  name: string;
  id: string;
  level: number;
  lifepoints: number;
  defense: number;
  attack: number;
  xp: number;
  slayerLevel: number;
  slayerCategory: string;
  attackable: boolean;
  aggressive: boolean;
  description: string;
}

export interface SkillMatrix {
  [key: string]: number
}

export interface ResourceType {
  requiredLevel: number;
  xp: number;
  name: string;
  timeToComplete: number;
}

export interface HarvestableType extends ResourceType {
  yields: Yield[];
}

export interface Yield { 
  item: Item;
  quantity: number;
  probabilityToLoot: number;
}

export interface Item {
  itemId: string;
  name: string; 
}