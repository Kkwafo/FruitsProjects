const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true})

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
  required: [true, "Check your name"]},
  rating: Number,
  review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});
const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "The best green fruit"
});
const banana = new Fruit ({
  name: "banana",
  rating: 10,
  review: "I love banana, but mi not a monkey? Darwins fault."
});
const lemond = new Fruit ({
  name: "lemond",
  rating: 8,
  review: "I want this one called Lemond"
});
// Fruit.insertMany([kiwi, banana, lemond], function (err){
//   if(err) {console.log("Error");}
//   else{ "The fruits was added"}
  // Fruit.save();

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "Juicy mmh!"
});
// pineapple.save();
const grapes = new Fruit({
  name: "grapes",
  rating: 6,
  review: "Perefect to make wine"
})
// grapes.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Amy",
  age: 17,
  favoriteFruit: pineapple
});
// person.save();


// Person.updateOne({_id:"62fe78ed901235234ec5698f"},{favoriteFruit: grapes}, function(err){
//   if(err){console.log(err);}
//   else{console.log("Favorite Frut added to respective ID");}
// })


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else{
    mongoose.connection.close();

  fruits.forEach(function (fruit){
    console.log(fruit.name);
  })}
});
// Fruit.updateOne({_id:"62fe710c8cefcc403b6a9720"}, {name:"LIMON"}, function (err){
//   if (err){console.log(err);} else{ console.log("No hubo errores en la actualizacion");}
// })
// Person.deleteMany({name: "Jhon"}, function(err){
//   if (err) {console.log("erorr")}
// else{console.log("sussefully deleted")}})
