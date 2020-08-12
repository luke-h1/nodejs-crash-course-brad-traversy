class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello ${name} your age is ${age}`);
    }
}
module.exports = Person;
