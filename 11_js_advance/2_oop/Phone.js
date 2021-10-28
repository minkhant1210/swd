// Class and Access Modifier

// class Phone {
//     model = "iPhone12";
//     static storage = 128;
//     color = ["Gole","Silver","Midnight Green","Graphite"];
//     isWaterProff = true;
//     #ram = 6;

//     get ram(){
//         return this.#ram;
//     }

//     set ram(value){
//         return this.#ram = value;
//     }

//     static isWaterProff(){
//         return "it's water proff"
//     };

//     showStorage = () => `${this.model} has ${this.storage} GB`;

//     promotion(){
//         return `${this.model} has ${this.#ram} and ${this.storage} and is avalible on the market!`;
//     };
// }

// let p = new Phone;


//constructor 

class Phone {
    constructor (model, ram , color){
        this.model = model;
        this.ram = ram;
        this.color = color;
    }

    fullSpec(){
        return `${this.model} has ${this.ram} GB ram and the color is ${this.color}`;
    }


}

let iPhone11 = new Phone("iPhone11","6","Purple");
let iPhone12 = new Phone("iPhone12","8","Midnight Green");
let iPhone13 = new Phone("iPhone12 Pro Max","12","Golden Silver");

