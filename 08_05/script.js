/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    // returns 8
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    // returns 5
    console.log("this.volume after update:", this.volume);
    // nested function which takes the volume from the entire DOM
    // function is hoisted to global scope
    // returns 20
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    // this arrow function stays within the local scope
    // returns 5 as the most recent declaration of volume
    (() => {
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
