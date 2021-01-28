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
    // constructor(type, legs, tail){
    //     super(type, legs);
    //     this.tail = tail;
    // }

    makeNoise(sound = "meow"){
        console.log(sound); //sample of overriding the parent class' functions
    };
};

let cat = new Animal('Cat', 4);
cat.makeNoise();
console.log(cat.metaData);

let newCat = new Cat('Cat', 4);
newCat.makeNoise();
console.log(newCat.metaData); //same metadata set in the parent class, being inherited by the child class

// console.log(cat.metaData);
// console.log(Animal.return10());