# TS LLD Library:-

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ If Everything works fine with correct params-1 - 1 mark.
 ✅ If Everything works fine with correct params-2 - 1 mark.
 ✅ If Everything works fine with correct params-3 - 1 mark.
 ✅ If Everything works fine with correct params-4 - 1 mark.
 ✅ If Everything works fine with correct params-5 - 1 mark.
 ✅ Book Params Checking-1 - 1 mark.
 ✅ Book Params Checking-2 - 1 mark.
 ✅ Section Params Checking - 1 mark.
 ✅ Add Book Params Checking - 1 mark.
 ✅ Library Params Checking - 1 mark.
 ✅ Add Section Params Checking-1 - 1 mark.

```

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate file and then copy the "contents" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- npm install --engine-strict

## Boilerplate:-

- Do not change the given folder structure
- inside src folder you will code.ts file that is where you need to write the code.
- In src will be a file index.ts. Please make sure this file should be always empty
- you can find the testcase under `__tests__ ` folder.

## Description

- You need to create a low-level design for a library.
- You need to write the following class with the given methods and instructions

- Create a class **Book**

- The constructor function of class `Book` which should accept the following params in the order:-

  1. section (A union type of `Fiction`, `Documentary` and `Educational`).
  2. name (String)

- Create a class **Section**

- The constructor function of class `Section` which will have the following properties:-

  1. name (A union type of `Fiction`, `Documentary` and `Educational`).
  2. books (Array of `Book`)

- The class **Section** will onely take name as a parameter. The books property will be initialized as an empty array.

- This class will have a method named `addBook` which takes a params of type `Book` and pushes it to the array books.

- Create a class **Library**

- The constructor function of class **Library** which will have the following properties:-

  1. name (String)
  2. sections (Array of `Section`)

- The class **Library** will onely take name as a parameter. The sections property will be initialized as an empty array.

- This class will have a method named `addSection` which takes a params of type `Section` and pushes it to the array sections.

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
