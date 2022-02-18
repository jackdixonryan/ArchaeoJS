import Mineable from "./resources/Mineable";

type PageOptions = {
  resources?: any[];
  name: string;
  location: string;
}

class Page {
  resources: any[];
  name: string;
  location: string;
  
  constructor(options: PageOptions) {
    const { resources, name, location } = options;
    this.resources = resources || [];
    this.name = name; 
    this.location = location;
  }

  addRandomMineables(quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      const mineable = new Mineable();
      this.resources.push(mineable);
    }
  }
}

export default Page;