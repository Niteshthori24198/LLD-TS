export enum ShowType {

    comedy = "Standup Comedy",

    dance = "Dance Show",

    singing = "Singing Show"
}



export abstract class Show {

    name;

    type;

    constructor(name: string, type: ShowType) {

        this.name = name;

        this.type = type
    }

    book(): void | Error { }
}



type SeatType = {

    seat: string;

    availability: number;

    price: number;
}



export class DanceShow extends Show {

    seats: SeatType[] = []

    constructor(name: string) {
        super(name, ShowType.dance)
    }

    addSeat(s: SeatType) {
        this.seats.push(s)
    }


    bookShow(seat: string, money: number): void | Error {

        let flag = true;

        for (let i = 0; i < this.seats.length; i++) {

            if (this.seats[i].seat === seat) {

                if (this.seats[i].availability > 0) {

                    if (money >= this.seats[i].price) {
                        this.seats[i].availability--;
                        flag = false;
                        break;

                    }
                }
            }

        }

        if (flag) {
            throw Error()
        }

    }

}




export class ComedyShow extends Show {


    seats: number;
    ticketPrice: number;

    constructor(name: string, seats: number, ticketPrice: number) {

        super(name, ShowType.comedy)

        this.seats = seats;
        this.ticketPrice = ticketPrice;
    }


    bookShow(money: number): void {


        if (this.seats > 0 && (money >= this.ticketPrice)) {

            this.seats--;

        }

    }



}





export class SingingShow extends Show {

    seats: SeatType[];

    constructor(name: string, seats: SeatType[]) {
        super(name, ShowType.singing)
        this.seats = seats
    }


    bookShow(seat: string, money: number): void | Error{

        let flag = true

        for (let i = 0; i < this.seats.length; i++) {

            if (this.seats[i].seat === seat) {

                if (this.seats[i].availability > 0) {

                    if (money >= this.seats[i].price) {
                        this.seats[i].availability--;
                        flag = false;
                        break;

                    }
                }
            }

        }

        if (flag) {
            throw Error()
        }

    }



}