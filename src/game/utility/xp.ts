export function xpToLevel(xp: number): number {
  const tree: number[] = fullXPTree();
  for (let i = 0; i < tree.length; i++) {
    const nextAmt: number = tree[i + 1];
    if (xp === nextAmt) {
      // +2 to account for levels starting at 1 and requiring the next indexed level.
      return i + 2;
    } else {
      if (xp < nextAmt) {
        // the +1 here because levels start @1. 
        return i + 1;
      }
    }
  }
  throw new Error("Level not found.");
}

export function levelToBaseXp(level: number): number {
  let test: number = 0;
  let counter: number = 0;

  for (let i = 1; i < level; test = Math.floor(counter / 4), i++) {
    const difference: number = Math.floor(i + 300 * Math.pow(2, i / 7));
    counter += difference;
  }

  return test;
}

// janky way of converting xp => level. Everything is going to be XP based so the level is just a translation layer
function fullXPTree(): number[] { 
  const levels: number[] = [];
  for (let i = 1; i < 121; i++) {
    levels.push(levelToBaseXp(i));
  }
  
  return levels;

}