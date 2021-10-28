// inheritance
class Animal {
    type = "warm Blodded";
    legs = 4;
}

class Dog extends Animal {
    name = "Dog";
    
    skill(){
        return `${this.name} can run fast`;
    }
}

class Cat extends Animal{
    name = "Cat";

    skill(){
        return `${this.name} can run fast too`;
    }
}

class Walkyaw extends Cat{
    name = "Wal Kyaw";

    skill(){
        return `${this.name} can sleep all day all night long`;
    }
}

class Ardam extends Dog {
    realName = "Ardam";

    skill(){
        return `${this.name} can run fast but ${this.realName} can run faster`
    }
}

let dog = new Dog();
let cat = new Cat();
let walkyaw = new Walkyaw();
let ardam = new Ardam();