
// test specification: A user signs in, discovers a new mainframe, and creates a page. 
import User from "../src/game/lib/user";
import Mainframe from "../src/game/lib/mainframe";
import { SkillMatrix } from "../src/types";
import Page from "../src/game/lib/resources/page";

let user: User; 
let mainframe: Mainframe;

beforeAll(() => {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  user = new User({
    email: "jack@mainframe.org",
    name: "jack"
  });

  mainframe = new Mainframe();
});

describe("A new user arrives on the mainframe.", () => {
  it("Properly builds the user and the mainframe.", () => {
    expect(user).toBeInstanceOf(User);
    expect(mainframe).toBeInstanceOf(Mainframe);
  });

  it("creates a user  with the proper pregenerated fields.", () => {
    const { skillMatrix } = user;
    expect(skillMatrix).toBeDefined();
  });

  it("registers the new mainframe without any pages.", () => {
    const { pages } = mainframe;
    expect(pages).toBeDefined();
    expect(pages.length).toBe(0);
  });
});

describe("The user, for lack of any other options, creates a new page in the mainframe.", () => {
  let page: Page;

  beforeAll(async () => {
    page = await mainframe.addPage(user, "basic", { name: "" });
    user.addXp("webmastering", page.xpForConstruction);
  });

  it("Creates the new page and adds it to the mainframe.", () => {
    expect(mainframe.pages.length).toBe(1);
    expect(mainframe.pages.find((mfPage) => mfPage.location === page.location)).not.toBeUndefined();
  }); 

  it("Compensates the user with webmastering xp.", () => {
    expect(user.skillMatrix["webmastering"]).not.toBe(0);
  });
});

