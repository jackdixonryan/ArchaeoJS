import { CharacterOptions, SkillMatrix } from "../../../types";
import { xpToLevel } from "../../utility/xp";
import Inventory from "./Inventory";

class User {
  name: string;
  email: string;
  title: string|null;
  skillMatrix: SkillMatrix;
  inventory: Inventory;
  constructor(options: CharacterOptions) {
    const { name, email, skillMatrix } = options;
    this.name = name;
    this.email = email;
    this.title = null;
    this.inventory = new Inventory();
    if (skillMatrix) {
      this.skillMatrix = skillMatrix; 
    } else {
      this.skillMatrix = this.generateSkillTree();
    }
  }

  generateSkillTree(): SkillMatrix {
    const xpMatrix: SkillMatrix = {
      webmastering: 0,
      hacking: 0,
      bugHunting: 0,
      daemonology: 0, 
      mining: 0,
      scripting: 0,
      botnetting: 0,
      networking: 0,
      cryptography: 0
    }

    return xpMatrix;
  }

  getLevels() {
    const levelMatrix: any = {};
    for (let entry in this.skillMatrix) {
      const xpAmount: number = this.skillMatrix[entry];
      const level: number = xpToLevel(xpAmount);
      levelMatrix[entry] = level;
    }

    return levelMatrix;
  }

  addXp(skill: string, amount: number): void { 
    this.skillMatrix[skill] += amount;
  }
}

export default User;