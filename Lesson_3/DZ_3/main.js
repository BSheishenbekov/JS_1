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


function countChar(value1) {
    console.log('Введенное число или слово занимает ' + value1.length + ' кодовых значений');
}

const number = {
    value1: prompt("Значение: "),
}


countChar(number.value1)
