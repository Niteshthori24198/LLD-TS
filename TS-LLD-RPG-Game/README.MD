# TS LLD RPG Game:-

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
✅ able to submit the app - 1 mark ( minimum score )
✅ The Instance creation of the Entity class works fine  - 1 mark.
✅ The Instance creation of the Player class works fine  - 1 mark.
✅ The Instance creation of the Swordsman class works fine  - 1 mark.
✅ The Instance creation of the Spearman class works fine  - 1 mark.
✅ The Instance creation of the Mage class works fine  - 1 mark.
✅ The Instance creation of the Zombies class works fine  - 1 mark.
✅ The Instance creation of the Werewolf class works fine  - 1 mark.
✅ Enity class parametrs are of given types - 1 marks
✅ The methods of Player class shouldn't exist in Entity class- 1 marks
✅ The methods of Enemy class shouldn't exist in Entity class - 1 marks
✅ Player class parametrs are of given types - 1 marks
✅ Player Class shouldn't have methods of other classes - 1 marks
✅ Enemy class parametrs are of given types - 1 marks
✅ Enemy Class shouldn't have methods of other classes - 1 marks
✅ Zombies Class shouldn't have methods of other classes - 1 marks
✅ Werewolf class parametrs are of given types - 1 marks
✅ Werewolf Class shouldn't have methods of other classes - 1 marks

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

- Inside src folder you will code.ts file that is where you need to write the code.

- In src will be a file index.ts. Please make sure this file should be always empty

## Description:-

- In this application we have to build a basic RPG game features using Typescript, OOPs, Classes, Inheritance.

- In the application there will be total of 8 classes:-
  1. Entity
  2. Player
  3. Enemy
  4. Swordsman
  5. Spearman
  6. Mage
  7. Zombies
  8. Werewolf
- Create an multilevel inheritance according to this image:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-04-14/diagram_321848.png)

### Entity Class:-

- This class will have take the following properties and it will be taking these values as params in the given order:-

  1. health -> Number;
  2. strength -> Number;
  3. defense -> Number;
  4. name -> String;

- This will also have a `movement` method.

### Player Class:-

- This class will have only one property which is

  1.  level -> Number

- This property won't be taken as a parameter. In the constructor this will be initialized as 1.

- There will also be a method named `attack`.

### Swordsman:-

- For this class the name will be `Swordsman`. It won't be taken from parameter.

- This class will also have a method named as `slashAttack`.

### Mage:-

- For this class the name will be `Mage`. It won't be taken from parameter.

- This class will also have a method named as `magicAttack`.

### Spearman:-

- For this class the name will be `Spearman`. It won't be taken from parameter.

- This class will also have a method named as `stabAttack`.

### Enemy:-

- Enemy class will have a method named `followPlayer`,

### Zombies:-

- - For this class the name will be `Zobmie`. It won't be taken from parameter.
- This class will have a method named `poisonAttack`.

### Werewolf:-

- - For this class the name will be `Werewolf`. It won't be taken from parameter.
- This class will have 2 methods named `biteAttack` & `roar`.

**_ All the classes will follow the inheritance model given in the diagram and all theb methods will be empty _**

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
