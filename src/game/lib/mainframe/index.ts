import Page from "../resources/page";
import User from "../user";

class Mainframe {
  pages: Page[];
  constructor() { 
    this.pages = [];
  }

  // needs to be more complicated to accomodate the long period of time it takes to create a page. 
  async addPage(user: User, type: string, options: { name: string; }): Promise<Page> {
    return new Promise((resolve, reject) => {
      try {
        const page: Page = new Page({
          type: type, 
          user: user,
          name: options.name,
        });
        const timeToComplete = page.type.timeToComplete;
        setTimeout(() => {
          this.pages.push(page);
          resolve(page);
        }, timeToComplete * 100);
      } catch(error) {
        reject(error);
      }
    });
  }
}

export default Mainframe;