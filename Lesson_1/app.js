const a = "a";

let c = "32";

const bool = true;
const bool2 = false;

console.log(typeof bool)

const obj = {
    key: "value",
    username: "Bek",
    data:{
        first_name:"jack,",
        last_name: "Nur"
    }
}
const first = prompt("Первое число: ")
const last = prompt("Второе число: ")

if (first < last){
    console.log(first + "<" + last)
}else if (first > last){
       console.log(first + ">" + last)
}else {
    console.log(first + "=" + last)
}d