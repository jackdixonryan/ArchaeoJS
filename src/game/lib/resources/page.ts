import { generateId } from "../../utility";
import { PageType, types } from "../../utility/page";
import User from "../user";
import Mineable from "./mineable";

type PageOptions = {
  resources?: any[];
  name: string;
  type: string;
  user: User;
}

class Page {
  resources: any[];
  name: string;
  location: string;
  type: PageType;
  userId: string;
  xpForConstruction: number;
  
  constructor(options: PageOptions) {
    const { resources, name, type, user } = options;

    const pageType = types.find((presetType) => presetType.name === type);
    if (!pageType) {
      throw new Error("Page type not found.");
    } else {
      this.type = pageType;
    }

    if (user.getLevels()["webmaster"] < this.type.requiredLevel) {
      throw new Error("The user is not a high enough level to harvest this resource.");
    } else { 
      this.resources = resources || [];
      this.name = name; 
      this.location = generateId();
      this.userId = user.name;
      this.xpForConstruction = pageType.xp;
    }
  }

  addRandomMineables(quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      const mineable = new Mineable();
      this.resources.push(mineable);
    }
  }
}

export default Page;