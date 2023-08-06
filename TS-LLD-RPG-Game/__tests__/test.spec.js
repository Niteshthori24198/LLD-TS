const cp = require("child_process");
const fs = require("fs");
const execPromise = () => {
  return new Promise((resolve, reject) => {
    cp.exec("npx ts-node src/index.ts", (e, data) => {
      if (e) {
        reject({ ...e, isErrorFromExec: true });
      } else {
        resolve(data);
      }
    });
  });
};
const fsPromise = (path = "", content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve("Created File");
    });
  });
};
global.score = 1;
global.passed = new Array(7).fill(false);

const FileContentPass = [
  `import { Entity } from "./code";
  const e = new Entity(100, 30, 40, "Swordsman");
  console.log(e.movement);
  console.log(e);`,
  `import { Player } from "./code";
  const p = new Player(100,20,30,"a");
  console.log(p.movement);
  console.log(p.attack);
  console.log(p);`,
  `import { Swordsman } from "./code";
  const p = new Swordsman(100,20,30);
  console.log(p.movement);
  console.log(p.attack);
  console.log(p.slashAttack);
  console.log(p);`,
  `import { Mage } from "./code";
  const p = new Mage(100,20,30);
  console.log(p.movement);
  console.log(p.attack);
  console.log(p.magicAttack);
  console.log(p);
  `,
  `import { Spearman } from "./code";
  const p = new Spearman(100,20,30);
  console.log(p.movement);
  console.log(p.attack);
  console.log(p.stabAttack);
  console.log(p);`,
  `import { Zombies } from "./code";
  const p = new Zombies(100,20,30);
  console.log(p.movement);
  console.log(p.followPlayer);
  console.log(p.poisonAttack);
  console.log(p);`,
  `import { Werewolf } from "./code";
  const p = new Werewolf(100,20,30);
  console.log(p.movement);
  console.log(p.followPlayer);
  console.log(p.biteAttack);
  console.log(p.roar);
  console.log(p);`,
];

const FileContentFail = [
  `import { Entity } from "./code";
  const e = new Entity("100", true, 40, "Swordsman");`,
  `import { Entity } from "./code";
  const e = new Entity(100, 30, 40, "Swordsman");
  e.attack();`,
  `import { Entity } from "./code";
  const e = new Entity(100, 30, 40, "Swordsman");
  e.poisonAttack();`,
  `import { Player } from "./code";
  const p = new Player("100",20,true,"a");`,
  `import { Player } from "./code";
  const p = new Player(100,20,30,"a");
  p.followPlayer();`,
  `import { Enemy } from "./code";
  const e = new Enemy("100", true,100, "zombie");`,
  `import { Enemy } from "./code";
  const e = new Enemy(100, 100,100, "zombie");
  e.poisonAttack();`,
  `import { Zombies } from "./code";
  const e = new Zombies(100, 100,100);
  e.biteAttack();`,
  `import { Werewolf } from "./code";
  const e = new Werewolf(true, 100,"100");
  e.biteAttack();`,
  `import { Werewolf } from "./code";
  const e = new Werewolf(100, 100,100);
  e.poisonAttack();`,
];
describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });

  it("Entity class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[0]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("Function");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Player class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[1]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: attack]");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Swordsman class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[2]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: attack]");
      expect(data).toContain("[Function: slashAttack]");
      global.score += 1;
      global.passed[2] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Mage class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[3]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: attack]");
      expect(data).toContain("[Function: magicAttack]");
      global.score += 1;
      global.passed[3] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Spearman class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[4]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: attack]");
      expect(data).toContain("[Function: stabAttack]");
      global.score += 1;
      global.passed[4] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Zombie class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[5]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: followPlayer]");
      expect(data).toContain("[Function: poisonAttack]");
      global.score += 1;
      global.passed[5] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Werewolf class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[6]);
      expect(data).toContain("health");
      expect(data).toContain("strength");
      expect(data).toContain("defense");
      expect(data).toContain("name");
      expect(data).toContain("[Function: movement]");
      expect(data).toContain("[Function: followPlayer]");
      expect(data).toContain("[Function: biteAttack]");
      expect(data).toContain("[Function: roar]");
      global.score += 1;
      global.passed[6] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Entity Class Params checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[0]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Entity Class methods checking-1", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Entity Class methods checking-2", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[2]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Player Class params checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[3]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Player Class methods checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[4]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Enemy Class params checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[5]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Enemy Class methods checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[6]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Zombie Class methods checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[7]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Werewolf Class params checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[8]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Werewolf Class methods checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[9]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const AllPassed = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    expect(arr[i]).toBeTruthy();
  }
};
const OnPass = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
