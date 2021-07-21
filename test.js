

// global variable
var list = [];




function sum(num1, num2){
    return num1 + num2;
}




function sayHello(name) {

    console.log("Hi " + name);
}





function runTest1() {
    console.log("Starting Test 1 - functions");


    sayHello("Jane");


    let result = sum(55, 342);

    console.log(result);
}



//object constructor

function Dog(name, age, c) {
    this.name = name;
    this.age = age;
    this.color = c;
}





function runTest2() {

    console.log("Tests for Objects");

    //object literal

    // used: configuration, 1 time structure

    let dog= {
        name: "Fido",
        age: 2,
        color: "Green"
    };

    console.log(dog);

    console.log( dog.name);
    dog.age = 3;

    let lola = {
        name: "Lola",
        age: 4,
        color: "Gray"
    };

    console.log(lola);



    //object constructor
    //used: multiple object same structure
    let solo = new Dog("Solo", 2, "Blue");
    console.log(solo);

    let another = new Dog("Loco", 5, "Red");
    console.log(another);
}


