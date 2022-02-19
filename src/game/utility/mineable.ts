import { generateId } from ".";
import { HarvestableType } from "../../types";

export interface MineableType extends HarvestableType {

}

export const types: MineableType[] = [ 
  {
    name: "chainRemains",
    requiredLevel: 1,
    xp: 1.4,
    timeToComplete: 0.1,
    yields: [
      { 
        item: {
          name: "chainRemain",
          itemId: generateId(),
        },
        quantity: 1,
        probabilityToLoot: 0.5,
      }
    ]
  },
  {
    name: "brokeAssChain",
    requiredLevel: 1,
    xp: 1.4,
    timeToComplete: 0.1,
    yields: [
      {
        item: { 
          name: "brokeAssChain",
          itemId: generateId(),
        },
        quantity: 1,
        probabilityToLoot: 0.5,
      }
    ]
  },
];