# TS LLD Book My Show:-

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
✅ able to submit the app - 1 mark ( minimum score )
✅ Dance Class Works Fine - 1 mark.
✅ Add seat to Dance Class Works Fine-1 - 1 mark.
✅ Add seat to Dance Class Works Fine-2 - 1 mark.
✅ Comedy Class Works Fine - 1 mark.
✅ Singing Class Works Fine - 1 mark.
✅ Comedy show booking Works Fine-1 - 1 mark.
✅ Comedy show booking Works Fine-2 - 1 mark.
✅ Comedy show booking Works Fine-3 - 1 marks
✅ Dance show booking Works Fine-1 - 1 marks
✅ Dance show booking Works Fine-2 - 1 marks
✅ Singing show booking Works Fine - 1 marks
✅ Singing Show Params Checking-1 - 1 marks
✅ Singing Show Params Checking-2 - 1 marks
✅ ComedyShow Params Checking-1 - 1 marks
✅ ComedyShow Show Params Checking-2 - 1 marks
✅ Instance of Show throws error - 1 marks
✅ Using book method throws error - 1 marks

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

## Description:-

- We have to build a book-my-show like show ticket booking app.
- We can have 3 diff types of shows:-
  1.  Dance
  2.  Comedy
  3.  Singing
- For Dance and Singing shows there can be diff types of seats. And each diff type of seat will have a diff price.
- Comedy shows will have only one type seat, so all ticket prices are going to b e same.
- In this Application we have total 4 classes 1 enum and a type alias:-
  1.  Show -> class
  2.  DanceShow -> class
  3.  ComedyShow -> class
  4.  SingingShow -> class
  5.  ShowType -> enum
  6.  SeatType -> type alias

### ShowType:-

- ShowType will a enum. It has total 3 keys and each key has a corresponsing string value:-
  1.  comedy -> "Standup Comedy"
  2.  dance -> "Dance Show"
  3.  singing -> "Singing Show"

### SeatType:-

- SeatType is a type alias which has total 3 properties:-
  1. seat -> string
  2. availability -> number
  3. price -> number

### Show:-

- In the template there will be a class with name:- `Show`.

- `Show` has two properties and one method:-

  1.  name -> String
  2.  type -> `ShowType`
  3.  book -> method

- `Show` class takes total 2 parameters:-

  1.  name
  2.  type

- Please make sure the order of the params are same as given above.

- The user shouldn't be able to create an instance of the `Show` class. It should only be used for inheritance.

- The book method should only be accessed by the the classes that inherit the `Show` class.

### DanceShow:-

- Danceshow class will inherit the `Show` class. DanceShow takes only one params `name`.
- This class will have an property named `seats` and a method named `addSeat`.
- The type `seats` will be an array of `SeatType`. By default the value of `seats` will be an empty array.
- Using the `addSeat` method the user should be able to add more seats to the show.

### ComedyShow:-

- ComedyShow class will inherit the `Show` class. It takes total 3 params in the given order:-

  1.  name -> string
  2.  seats -> number
  3.  ticketPrice -> number

- This class will have 2 properties:- `seats` and `ticketPrice`,

### SingingShow:-

- SingingShow class will inherit the `Show` class. It takes total 2 params in the given order:-

  1. name -> string
  2. seats -> Array of SeatType

- This class will have only one property which is `seats`.

### bookShow Method:-

- This is going to be a common method that will be available on all the classes that inherit `Show` but all of their working process will be different.

#### Different Types of Seats

- In case of Dance and Singing as there can be diff types of seats the function takes 2 params:-

  1. seat -> string
  2. money -> number

- In the `seats` array we will try to find the seat that is same as the seat passed in parameter.

- If we are able to find it, check if availability is greater than 0 or not.

- If availability is > 0 then check if money is >= the price of the ticket.

- If both the conditions are true then decrease the availability by 1

#### One type of seat:-

- In case of ComedyShow the bookShow method only takes one parameter that is money.
- If the no of seats is greater than zero and money is greater than or equal to ticketPrice decrease the seats by one.

- Write common functionality of the different `bookShow` methods in the `book` method of the `Show` class.

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
