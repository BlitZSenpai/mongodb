

const { MongoNetworkError } = require("mongodb");
const mongoose = require("mongoose");

const Mongoose = mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    }, 
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "this is a good apple"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "doe",
    age: 32
});


// person.save();

const mango = new Fruit({
    name: "manngo",
    score: 10,
    review: "good"
})

const kiwi = new Fruit({
    name: "kiwi",
    score: 2,
    review: "emo"
})

const banana = new Fruit({
    name: "banana",
    score: 0,
    review: "shit"
})

// Fruit.insertMany([kiwi , mango , banana]);

    


