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
global.passed = new Array(11).fill(false);

const FileContentPass = [
  `import { DanceShow } from "./code";
  const dance = new DanceShow("Bharat Natyam");
  console.log(dance.name);
  console.log(dance.seats.length);
  console.log(dance.type);`,
  `import { DanceShow } from "./code";
  const dance = new DanceShow("Bharat Natyam");
  dance.addSeat({
      seat: "Tier-1",
      availability: 10,
      price: 500
  })
  console.log(dance.seats.length);`,
  `import { DanceShow } from "./code";
  const dance = new DanceShow("Bharat Natyam");
  dance.addSeat({
      seat: "Tier-1",
      availability: 10,
      price: 500
  })
  dance.addSeat({
    seat: "Tier-2",
    availability: 20,
    price: 200
})
  console.log(dance.seats.length);`,
  `import { ComedyShow } from "./code";
  const comedy = new ComedyShow("Rahul", 50, 200);
  console.log(comedy.seats);
  console.log(comedy.name);
  console.log(comedy.ticketPrice);
  console.log(comedy.type);`,
  `import { SingingShow } from "./code";
  const singing = new SingingShow("Arijit Sing", [
      {
          seat: "Tier-1",
          availability: 20,
          price: 500,
      }
  ])
  console.log(singing.type);
  console.log(singing.name);
  console.log(singing.seats.length);`,
  `import { ComedyShow } from "./code";
  const comedy = new ComedyShow("Rahul", 2, 100);
  comedy.bookShow(100);
  console.log(comedy.seats);`,
  `import { ComedyShow } from "./code";
  const comedy = new ComedyShow("Rahul", 2, 100);
  comedy.bookShow(200);
  console.log(comedy.seats);`,
  `import { ComedyShow } from "./code";
  const comedy = new ComedyShow("Rahul", 2, 100);
  comedy.bookShow(200);
  comedy.bookShow(100);
  comedy.bookShow(100);
  console.log(comedy.seats);`,
  `import { DanceShow } from "./code";
  const dance = new DanceShow("Bharat Natyam");
  dance.addSeat({
      seat: "Tier-1",
      availability: 2,
      price: 500
  })
  dance.addSeat({
    seat: "Tier-2",
    availability: 20,
    price: 200
})
dance.bookShow("Tier-1", 600)
console.log(dance.seats[0].availability);`,
  `import { DanceShow } from "./code";
const dance = new DanceShow("Bharat Natyam");
dance.addSeat({
    seat: "Tier-1",
    availability: 2,
    price: 500
})
dance.addSeat({
  seat: "Tier-2",
  availability: 3,
  price: 200
})
dance.bookShow("Tier-2", 200)
console.log(dance.seats[1].availability);`,
  `import { SingingShow } from "./code";
const singing = new SingingShow("Arijit Sing", [
    {
        seat: "Tier-1",
        availability: 4,
        price: 500,
    }
])
singing.bookShow("Tier-1", 700);
console.log(singing.seats[0].availability);`,
];

const FileContentFail = [
  `import { SingingShow } from "./code";
  const singing = new SingingShow(10, [
      {
          seat: "Tier-1",
          availability: 4,
          price: 500,
      }
  ]);`,
  `import { SingingShow } from "./code";
  const singing = new SingingShow("Arijit Sing", [
      {
          seat: true,
          availability: 4,
          price: 500,
      }
  ]);`,
  `import { ComedyShow } from "./code";
  const com = new ComedyShow(10, 10, 20);`,
  `import { ComedyShow } from "./code";
  const com = new ComedyShow("10", "10", 20)`,
  `import { Show, ShowType } from "./code";
  const s = new Show("abcd", ShowType.singing);`,
  `import { ComedyShow } from "./code";
  const com = new ComedyShow("10", 10, 20);
  com.book(10, 1,10);`,
];
describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });
  it("Dance Class Works Fine", async () => {
    try {
      let data = await OnPass(FileContentPass[0]);
      expect(data).toContain("Bharat Natyam");
      expect(data).toContain("0");
      expect(data).toContain("Dance Show");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Add seat to Dance Class Works Fine-1", async () => {
    try {
      let data = await OnPass(FileContentPass[1]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Add seat to Dance Class Works Fine-2", async () => {
    try {
      let data = await OnPass(FileContentPass[2]);
      expect(data).toContain("2");
      global.score += 1;
      global.passed[2] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Comedy Class Works Fine", async () => {
    try {
      let data = await OnPass(FileContentPass[3]);
      expect(data).toContain("Rahul");
      expect(data).toContain("50");
      expect(data).toContain("Standup Comedy");
      global.score += 1;
      global.passed[3] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Singing Class Works Fine", async () => {
    try {
      let data = await OnPass(FileContentPass[4]);
      expect(data).toContain("Arijit Sing");
      expect(data).toContain("1");
      expect(data).toContain("Singing Show");
      global.score += 1;
      global.passed[4] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Comedy show booking Works Fine-1", async () => {
    try {
      let data = await OnPass(FileContentPass[5]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[5] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Comedy show booking Works Fine-2", async () => {
    try {
      let data = await OnPass(FileContentPass[6]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[6] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Comedy show booking Works Fine-3", async () => {
    try {
      let data = await OnPass(FileContentPass[7]);
      expect(data).toContain("0");
      global.score += 1;
      global.passed[7] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Dance show booking Works Fine-1", async () => {
    try {
      let data = await OnPass(FileContentPass[8]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[8] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Dance show booking Works Fine-2", async () => {
    try {
      let data = await OnPass(FileContentPass[9]);
      expect(data).toContain("2");
      global.score += 1;
      global.passed[9] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Singing show booking Works Fine", async () => {
    try {
      let data = await OnPass(FileContentPass[10]);
      expect(data).toContain("3");
      global.score += 1;
      global.passed[10] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Singing Show Params Checking-1", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[0]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Singing Show Params Checking-2", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("ComedyShow Params Checking-1", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[2]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("ComedyShow Show Params Checking-2", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[3]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Instance of Show throws error", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[4]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Using book method throws error", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[5]);
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
