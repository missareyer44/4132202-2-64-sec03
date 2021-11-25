var string1 = "st1"; //global
string2 = "st2"; // same var

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}
console.log(string1);

{
    const string1 = "nes"
    // string1 = "klangsawat";
}

//tradition fn
function add(a, b) {
    let c = a + b;
    return c;
}

let res = add(5, 3);
console.log(res);

//arrow function
const addFn = (a,b) => a + b;
res = addFn(8, 5);
console.log(res);

//array
const cars = ["toyota", "mazda", "honda"];
const fruits = [];
fruits[0] = "apple";
fruits[3] = "mango";
const people = new Array("nes,", "smith", "joe");
console.log(people);
console.log(fruits);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.push("kubota");
cars.shift(); //remove "toyota"
cars.unshift("froza");
console.log(cars);

const carSlice = cars.slice(1,2);
console.log(carSlice);

carSlice.splice(1,0,"Honda");
console.log(carSlice);

console.log(carSlice.toString());
console.log(carSlice.concat(people));
