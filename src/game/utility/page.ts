import { ResourceType } from "../../types";

export interface PageType extends ResourceType {
  resourceMin: number;
  resourceMax: number;
}

export const types: PageType[] = [ 
  {
    name: "basic",
    requiredLevel: 1,
    xp: 98,
    timeToComplete: 4,
    resourceMin: 1,
    resourceMax: 5,
  },
  {
    name: "beginner",
    requiredLevel: 5,
    xp: 114.5,
    timeToComplete: 40,
    resourceMin: 1, 
    resourceMax: 6,
  },
  {
    name: "portal",
    requiredLevel: 7,
    xp: 125,
    timeToComplete: 40,
    resourceMin: 2,
    resourceMax: 6
  },
];