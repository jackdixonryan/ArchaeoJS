
export type CharacterOptions = { 
  name: string;
  email: string;
  skillMatrix?: SkillMatrix;
}

export type Daemon = {
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

export type SkillMatrix = {
  [key: string]: number
}