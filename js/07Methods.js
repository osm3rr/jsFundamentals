// metodos en javascript

// const person = {
//     name: "Josefino",
//     lastName: "Primero",
//     age: 30,
//     city: "New York",
//     address: {
//         street: "123 Main St",
//         zip: "12345"
//     },
//     hobbies: ["reading", "traveling", "sports"],
//     isStudent: true,
//     fullName: function () {
//         return this.name + " " + this.lastName;
//     }
// };

// console.log(person.fullName());

// calculadora utilizando atributos, metodos y this

const calculator = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this; // Enable chaining
    },
    subtract: function (num) {
        this.value -= num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    divide: function (num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.error("Cannot divide by zero!");
        }
        return this;
    },
    clear: function () {
        this.value = 0;
        return this;
    },
    getResult: function () {
        return this.value;
    }
};

// uso de la calculadora
console.log(calculator.add(5, 3).getResult());


