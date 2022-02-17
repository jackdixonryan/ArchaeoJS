import Page from "./Page";

class Mainframe {
  pages: Page[];
  constructor() { 
    this.pages = [];
  }

  addPage(page: Page): string {
    this.pages.push(page);
    return page.location; 
  }
}

export default Mainframe;