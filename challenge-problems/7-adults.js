/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Ariel Winter', 'Post Malone' ]
***********************************************************************/

function adults(people) {
  // your code here
  let ofAge = [];
  for(let i = 0; i < people.length; i++){
    if(people[i].age >= 18){
      ofAge.push(people[i].name);
    }
  }
  return ofAge;
}

module.exports = adults