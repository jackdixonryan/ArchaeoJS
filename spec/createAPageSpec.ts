
// test specification: A user signs in, discovers a new mainframe, and creates a page. 
import User from "../src/game/lib/user";
import Mainframe from "../src/game/lib/mainframe";
import Page from "../src/game/lib/resources/page";

let user: User; 
let mainframe: Mainframe;

beforeEach(() => {

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

  it("Creates the new page and adds it to the mainframe.", async () => {
    page = await mainframe.addPage(user, "basic", { name: "" });
    user.addXp("webmastering", page.xpForConstruction);
    expect(mainframe.pages.length).not.toBe(0);
    expect(mainframe.pages.find((mfPage) => mfPage.location === page.location)).not.toBeUndefined();
  }); 

  it("Compensates the user with webmastering xp.", async () => {
    page = await mainframe.addPage(user, "basic", { name: "" });
    // this is implementation code. Needs to be extracted.
    user.addXp("webmastering", page.xpForConstruction);
    expect(user.skillMatrix["webmastering"]).not.toBe(0);
  });
});

describe("The user enjoys creating pages! They want to create a better one.", () => {
  let ambitiousUser: User;

  beforeAll(() => {
    ambitiousUser = new User({ 
      name: "ambition",
      email: "YEAH"
    });
  });

  it("Doesn't let them, because they're just not good enough yet.", async () => {
    await expectAsync(mainframe.addPage(ambitiousUser, "portal", { name: "" })).toBeRejectedWith(new Error("INSUFFICIENT_LEVEL"));
  });

  it("lets them train, though!", async () => {
    for (let i = 0; i < 10; i++) {
      const page = await mainframe.addPage(ambitiousUser, "basic", { name: "" });
      ambitiousUser.addXp("webmastering", page.xpForConstruction);
    }
    expect(ambitiousUser.getLevels()["webmastering"]).toBe(9);
  });

  it("will now permit them, having levelled up their webmastering, to create more advanced pages.", async () => {
    const page = await mainframe.addPage(ambitiousUser, "portal", { name: "" });
    ambitiousUser.addXp("webmastering", page.xpForConstruction);
    expect(ambitiousUser.skillMatrix["webmastering"]).toBe(1105);
  });
});

