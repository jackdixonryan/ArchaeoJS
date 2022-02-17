import { CharacterOptions } from "../../types";

class Character {
  name: string;
  constructor(options: CharacterOptions) {
    const { name } = options;
    this.name = name;
  }
}