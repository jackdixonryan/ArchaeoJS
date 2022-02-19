
export type PageType = {
  requiredLevel: number;
  xp: number;
  name: string;
  timeToComplete: number;
}


export const types: PageType[] = [ 
  {
    name: "basic",
    requiredLevel: 1,
    xp: 98,
    timeToComplete: 4
  },
  {
    name: "beginner",
    requiredLevel: 5,
    xp: 114.5,
    timeToComplete: 40,
  },
  {
    name: "portal",
    requiredLevel: 7,
    xp: 125,
    timeToComplete: 40
  },
];