// console.log(animals);

// const [cat, dog] = animals;

// console.log(cat);
// console.log(dog);

// Destructuring an Object

// const { name, sound } = dog;
// console.log(sound);

// Name can  e changed
// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

//Assign Object if not defined
// const { name = "missy", sound = "chewww" } = cat;
// console.log(name);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

// const {
//   coloursByPopularity: [teslaTopColour],
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour],
// } = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
