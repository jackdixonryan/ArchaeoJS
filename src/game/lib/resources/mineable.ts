import { Yield } from "../../../types";
import { generateId } from "../../utility";
import { MineableType, types } from "../../utility/mineable";
import User from "../user";

type MineableOptions = {
  type: string;
}

class Mineable {
  type: MineableType;
  id: string;

  constructor(mineableOptions?: MineableOptions) {
    if (mineableOptions) {
      // deconstruct the type from the options. 
      const { type } = mineableOptions
      const specifiedType = types.find((typeObj) => typeObj.name === type);
      // if the specified type is in the type library, it can be used.
      if (specifiedType) {
        this.type = specifiedType;
        this.id = generateId();
        // if the specified type is not in the type library, it cannot be generated. 
      } else {
        throw new Error(`Type ${type} is not available.`);
      }
    } else {
      // random resource needs to be generated.
      const randomIndex = Math.floor(Math.random() * types.length);
      const randomType  = types[randomIndex];
      this.type = randomType;
      this.id = generateId();
    }
  }

  async harvest(): Promise<{ xp: number; haul: Yield[] }> {
    return new Promise((resolve, reject) => {
      const haul: Yield[] = [];
      this.type.yields.forEach((item) => {
        const randomRoll: number = Math.random();
        if (item.probabilityToLoot >= randomRoll) { 
          haul.push(item);
        }
      });

      const timeToComplete = this.type.timeToComplete;

      setTimeout(() => {
        resolve({
          xp: this.type.xp,
          haul
        });
      }, timeToComplete * 100);
    });
  }
}

export default Mineable;