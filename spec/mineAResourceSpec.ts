import Mainframe from "../src/game/lib/mainframe"
import User from "../src/game/lib/user";

let mainframe: Mainframe;
let user: User;

beforeAll(async () => {
  mainframe = new Mainframe();
  user = new User({
    name: "jack",
    email: "jack@example.com"
  });

  await mainframe.addPage(user, "basic", { name: "" });

});

describe("Mining mineables", () => {

  it("has mineables to mine.", () => {
    expect(mainframe.pages[0].resources.length).not.toBe(0);
  });

  it("The user can target a particular mineable.", () => {
    const resource = mainframe.pages[0].resources[0];
    expect(resource).toBeDefined();
  });

  it("Allows the user to harvest a resource.", async () => {
    const resource = mainframe.pages[0].resources[0];
    const miningResult = await resource.harvest();

    user.addXp("mining", miningResult.xp);

    expect(user.skillMatrix["mining"]).toBe(1.4);
  });

  it("Takes, actually, a good bit of work to get some levels in mining.", async () => {
    for (let i = 0; i < 100; i++) {
      const resource = mainframe.pages[0].resources[0];
      const miningResult = await resource.harvest();
      miningResult.haul.forEach((yieldy) => {
        for (let k = 0; k < yieldy.quantity; k++) {
          try {
            user.inventory.addItem(yieldy.item);
          } catch(error) {
            // no a whole lot of nothing
          }
        }
      });
      user.addXp("mining", miningResult.xp);
    }
  });

  it("all comes in handy though, because we get stuff from it.", () => {
    const { inventory } = user;
    expect(inventory.carrying()).toBeGreaterThan(1);
  });
});