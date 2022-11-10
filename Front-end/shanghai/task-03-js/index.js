function getType(value){
    return typeof value;
}

console.log(getType(123n));
console.log(getType('123'));
console.log(getType(true));