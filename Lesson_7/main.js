
class constr {
    constructor(type, floor, color, location, numberOfRooms) {
        this.type = type;
        this.location = location;
        this.color = color;
        this.floor = floor;
        this.numberOfRooms = numberOfRooms;
    }
}

class school extends constr {
    constructor(type, floor, color, location, numberOfRooms, numberOfWindow, numberOfTrees, numberOfPC, numberOfStudents, numberOfTeachers) {
        super(type, floor, color, location, numberOfRooms);

        this.numberOfWindow = numberOfWindow;
        this.numberOfTrees = numberOfTrees;
        this.numberOfPC = numberOfPC;
        this.numberOfStudents = numberOfStudents;
        this.numberOfTeachers = numberOfTeachers;
    }

}

class home extends constr{
    constructor(type, floor, color, location, numberOfRooms, numberOfTrees, houseHeight, numberOfTables, tv, numberOfPeople, numberOfCars,
                numberOfNeighbor, houseAge, numberOfLights, price) {
        super(type, floor, color, location, numberOfRooms);

        this.numberOfTrees = numberOfTrees;
        this.houseHeight = houseHeight;
        this.numberOfTables = numberOfTables;
        this.tv = tv;
        this.numberOfPeople = numberOfPeople;
        this.numberOfCars = numberOfCars;
        this.numberOfNeighbor = numberOfNeighbor;
        this.houseAge = houseAge;
        this.numberOfLights = numberOfLights;
        this.price = price;
    }
}

const mySchool = new school(
    'secondary school',
    '3',
    'red',
    'Bishkek',
    50,
    100,
    60,
    30,
    2000,
    70
)

console.log(mySchool)

const myHome = new home(
    'a private house',
    1,
    'brown',
    'Bishkek',
    6,
    15,
    5,
    3,
    2,
    4,
    2,
    30,
    45,
    3,
    '60000 $$$'
)

console.log(myHome)
