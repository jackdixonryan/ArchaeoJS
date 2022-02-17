import { generateId } from "../../../utility"
type MineableOptions = {
  type: string;
}

type MineableType = {
  type: string;
  level: number;
  maxAmount: number;
  itemYield: string;
}

class Mineable {
  type: string;
  amount: number;
  level: number;
  itemYield: string;
  id: string;
  constructor(mineableOptions?: MineableOptions) {
    if (mineableOptions) {
      // deconstruct the type from the options. 
      const { type } = mineableOptions;
      const types = this.typeMatrix();
      const specifiedType = types.find((typeObj) => typeObj.type === type);
      // if the specified type is in the type library, it can be used.
      if (specifiedType) {
        this.type = type;
        this.amount = Math.floor(Math.random() * specifiedType.maxAmount);
        this.level = specifiedType.level;
        this.itemYield = specifiedType.itemYield;
        this.id = generateId();
        // if the specified type is not in the type library, it cannot be generated. 
      } else {
        throw new Error(`Type ${type} is not available.`);
      }
    } else {
      // random resource needs to be generated.
      const types = this.typeMatrix();
      const randomIndex = Math.floor(Math.random() * types.length);
      const { type, level, maxAmount, itemYield } = types[randomIndex];
      this.type = type;
      this.amount = Math.floor(Math.random() * maxAmount);
      this.level = level;
      this.itemYield = itemYield;
      this.id = generateId();
    }
  }

  // create and include all possible types below. 
  typeMatrix(): MineableType[] {
    return [
      { 
        type: "BasicTransaction",
        level: 0,
        maxAmount: 10,
        itemYield: "BasicDataPacket"
      }
    ]
  }
}

export default Mineable;