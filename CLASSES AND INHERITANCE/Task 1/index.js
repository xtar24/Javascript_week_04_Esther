class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe,convertible, numbOfDoors) {
    this.numSeats = numSeats;
    this.numbHeadLamps = numbHeadLamps;
    this.fuelTankMaxLitre = fuelTankMaxLitre;
    this.numbExhaustPipe = numbExhaustPipe;
    this.convertible = convertible;
    this.numbOfDoors = numbOfDoors;
    this.numbOfEnginePlug = 4;
    }
}

const sedan = new Car(5, 2, 50, 1, false, 4);
const truck = new Car(3, 2, 100, 2, false, 2);
const suv = new Car(7, 2, 60, 1, false, 2);

console.log(sedan);
console.log(truck);
console.log(suv);