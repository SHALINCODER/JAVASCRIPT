// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name 

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){
        console.log(`Hi I'm ${this.name}`);
    },
    eat: function(){
        console.log(` ${this.name} is eating ${this.favFood}`);
    },
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){
        console.log(`Hi I'm ${this.name}`); //IF THIS NOT USED YOU WILL GET BLANK SAME WITH ARROW FUNCTIONS
    },
    eat: function(){
        console.log(` ${this.name} is eating ${this.favFood}`);
    },
}
person1.eat();

person2.eat();

console.log(this)  //window object
// this is refernced to the object when inside a object
// this doesn't work with arrow functions, it refernce to window object 



