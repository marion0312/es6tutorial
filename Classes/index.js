class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound);
    };

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10(){
        return 10;
    }
}

class Cat extends Animal{
    constructor(type, legs, tail){
        super(type, legs);
    }
};

let cat = new Animal('Cat', 4);
cat.makeNoise("Woof");

console.log(cat);
console.log(cat.metaData);
console.log(Animal.return10());