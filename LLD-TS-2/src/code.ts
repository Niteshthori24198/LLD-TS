export class Vehicle {

    VehicleType;
    registrationNumber;
    color;

    constructor(registrationNumber: number, color: string, VehicleType: "Car" | "Bike" | "Bus") {
        this.registrationNumber = registrationNumber;
        this.color = color;
        this.VehicleType = VehicleType;
    }

}


export class Bike extends Vehicle {


    constructor(registrationNumber: number, color: string) {

        super(registrationNumber, color, "Bike");

    }



}

export class Bus extends Vehicle {

    constructor(registrationNumber: number, color: string) {

        super(registrationNumber, color, "Bus");

    }
}

export class Car extends Vehicle {

    constructor(registrationNumber: number, color: string) {

        super(registrationNumber, color, "Car");

    }
}

export class Slot {

    type;

    isBooked: Boolean = false;

    constructor(type: "Bus" | "Bike" | "Car") {
        this.type = type;
    }

}

export class ParkingSlot {


    maxLimit;

    parkingSpots:Slot[] = [];

    constructor( maxLimit:number){
        this.maxLimit=maxLimit;
    }


    addSlots(x:Slot) {

        if(this.parkingSpots.length < this.maxLimit){

            this.parkingSpots.push(x);

        }
        return this.parkingSpots.length;
    }

    availableSlot(type:"Bike" | "Bus" | "Car") {

        let c=0;

        for(let i=0;i<this.parkingSpots.length;i++){
            if(this.parkingSpots[i].type === type && this.parkingSpots[i].isBooked === false){
                c++
            }
        }
       

        return c


    }

    bookSlot(x:Car | Bus | Bike) {

        for(let i=0;i<this.parkingSpots.length;i++){
            if(this.parkingSpots[i].type === x.VehicleType && this.parkingSpots[i].isBooked === false){
                this.parkingSpots[i].isBooked = true
                return true
            }
        }

        return false

    }
}













