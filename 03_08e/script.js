/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  // toggleLid function receives one parameter, this parameter sets this object lidOpen
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

// bracket notation
// gives us more control that dot notation
// Can use a variable witb bracket notation or properties with non-standard names
var query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);
