import { Item } from "../../../types";

class Inventory {
  slots: (Item|null)[];
  constructor() { 
    this.slots = new Array(28);
    this.slots.fill(null);
    Object.seal(this.slots);
  }

  addItem(item: Item) {
    const slotIndex = this.slots.findIndex((slot) => slot === null);
    if (slotIndex === -1) {
      throw new Error("INVENTORY_FULL");
    } else {
      this.slots[slotIndex] = item;
    }
  }
  
  carrying(): number { 
    return this.slots.filter((slot) => slot !== null).length;
  }
}

export default Inventory;