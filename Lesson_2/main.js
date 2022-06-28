/*const array = [
    {
        username: "Jack",
        fullname: "Mack"
    },
    {
        username: "Jack",
        fullname: "Mack"
    },
    {
        username: "Jack",
        fullname: "Mack"
    },
    {
        username: "Jack",
        fullname: "Mack"
    },
    {
        username: "Jack",
        fullname: "Mack"
    },
    {
        username: "Jack",
        fullname: "Mack"
    }
]*/

/*for( let i=0; i<array.length; i++){
    if(i===20){
        break;
    }else {
        console.log(array[i])
    }
}*/

/*for (let user of array){
    console.log(user)
}*/

/*const obj = {
    key1: "1",
    key2: "2",
    key3: "3",
    key4: "4",
    key5: "5",
    key6: "6",
    key7: "7",
}

for(let key in obj){
    console.log([key])
}*/

const cars = [
    {
        model: "Bugatti Vieiron",
        force: "1000"
    },
    {
        model: "Ferrari f50",
        force: "500"
    },
    {
        model: "McLaren F1",
        force: "700"
    },
    {
        model: "Lamborghini Huracán",
        force: "647"
    },
    {
        model: "Lamborghini Aventador",
        force: "759"
    },
]

const filterCar = cars.filter(force => force.force >700)