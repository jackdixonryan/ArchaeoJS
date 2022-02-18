import Page from "./Page";

class Mainframe {
  pages: Page[];
  constructor() { 
    this.pages = [];
  }

  // needs to be more complicated to accomodate the long period of time it takes to create a page. 
  addPage(user: string, difficulty: number): string {
    const pageOptions = {
      resources: [],
      name: "",
      location: "",
    }

    const page = new Page(pageOptions);
    
    setInterval(() => {
      console.log("creating page...");
      page.addRandomMineables(1);
      console.log("added resources!");
    }, difficulty * 1000);
    page.addRandomMineables(1);

    return page.location;
  }
}

export default Mainframe;