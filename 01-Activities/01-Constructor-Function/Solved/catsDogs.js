// Create a constructor function called `Animal` that takes in two parameters `raining` and `noise`
// Include a function called `makeNoise()`
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  var makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// these 2 lines, create the objects below
let dog = new Animal(true, "Woof!");
let cat = new Animal(false, "Meow!");

// Creates `dog` and `cat` objects with `raining` and `noise` properties
// dog =  {
//     raining:true,
//     noise:"Woof",
//     makeNoise:function() {
//       if (this.raining === true) {
//         console.log(this.noise);
//       }
//     }
// }

// cat =  {
//   raining:false,
//   noise:"Meow",
//   makeNoise:function() {
//     if (this.raining === true) {
//       console.log(this.noise);
//     }
//   }
// }

let horse = new Animal(false, "Neigh!");

let pig = new Animal(false, "oink!");

// Calls the `makeNoise()` methods on the `dog` and `cat` objects
dog.makeNoise();
cat.makeNoise();

// Bonus code
cat.raining = true;
cat.makeNoise();
