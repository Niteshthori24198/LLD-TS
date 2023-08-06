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
global.passed = new Array(5).fill(false);

const FileContentPass = [
  `import {Book,Section,Library} from "./code";
  const book1 = new Book("Documentary", "D1");
  console.log(book1);`,
  `import {Book,Section,Library} from "./code";

  const book1 = new Book("Documentary", "D1");
  const book2 = new Book("Documentary", "D2");
  const book3 = new Book("Documentary","D3");
  
  const section = new Section("Documentary");
  section.addBook(book1);
  section.addBook(book2);
  section.addBook(book3);
  console.log(section);
  `,
  `import {Book,Section,Library} from "./code";
  const section = new Section("Documentary");
  console.log(section);`,
  `import {Book,Section,Library} from "./code";
  const lib= new Library("abcd");
  console.log(lib);`,
  `import {Book,Section,Library} from "./code";
  const book1 = new Book("Documentary", "D1");
  const book2 = new Book("Documentary", "D2");
  const book3 = new Book("Documentary","D3");
  const section = new Section("Documentary");
  section.addBook(book1);
  section.addBook(book2);
  section.addBook(book3);
  const lib= new Library("abcd");
  lib.addSection(section);
  console.log(lib);
  `,
];

const FileContentFail = [
  `import {Book,Section,Library} from "./code";
  const book1 = new Book("", "D1");`,
  `import {Book,Section,Library} from "./code";
  const book1 = new Book("Documentary", 10);`,
  `import {Book,Section,Library} from "./code";
  const sec = new Section("")`,
  `import {Book,Section,Library} from "./code";
  const sec = new Section("Fiction");
  sec.addBook(10)`,
  `import {Book,Section,Library} from "./code";
  const Lib = new Library(10);`,
  `import {Book,Section,Library} from "./code";
  const Lib = new Library("abcd");
  Lib.addSection(false);`,
];

describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });
  it("If Everything works fine with correct params-1", async () => {
    try {
      let data = await OnPass(FileContentPass[0]);
      expect(data).toContain("D1");
      expect(data).toContain("Documentary");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("If Everything works fine with correct params-2", async () => {
    try {
      let data = await OnPass(FileContentPass[1]);
      expect(data).toContain("D1");
      expect(data).toContain("D2");
      expect(data).toContain("D3");
      expect(data).toContain("Documentary");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("If Everything works fine with correct params-3", async () => {
    try {
      let data = await OnPass(FileContentPass[2]);
      expect(data).toContain("[]");
      expect(data).toContain("Documentary");
      global.score += 1;
      global.passed[2] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("If Everything works fine with correct params-4", async () => {
    try {
      let data = await OnPass(FileContentPass[3]);
      expect(data).toContain("abcd");
      expect(data).toContain("[]");
      global.score += 1;
      global.passed[3] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("If Everything works fine with correct params-5", async () => {
    try {
      let data = await OnPass(FileContentPass[4]);
      expect(data).toContain("abcd");
      expect(data).toContain("Documentary");
      global.score += 1;
      global.passed[4] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);

  it("Book Params Checking-1", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[0]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Book Params Checking-2", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Section Params Checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[2]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Add Book Params Checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[3]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Library Params Checking", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[4]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Add Section Params Checking-1", async () => {
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
