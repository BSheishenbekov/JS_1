/*function getFullName(user, age) {
    if (age < 18){
        console.log("Close")
    }
    else {
        console.log(user.first_name, user.last_name + " " + "Open")
    }
}

const age = prompt("Сколько вам лет?")

const user = {
    first_name: "Don",
    last_name: "Diablo"
}
getFullName(user,age)*/

/*function numbers(number1, number2) {
    if(number1 > number2){
        console.log("Первое больше второго")
    }else if (number1 < number2){
        console.log("Второе больше первого")
    }else {
        console.log("Они равны")
    }
}

const number = {
    number1: prompt("Число1: "),
    number2: prompt("Число2: ")
}

numbers(number.number1, number.number2)*/

function getFullName(user, cb) {
    console.log(user.first_name, user.last_name)
}

function callBack() {
    console.log("I am callBack")
}
const user = {
    first_name: "Don",
    last_name: "Diablo"
}

getFullName(user,callBack())

