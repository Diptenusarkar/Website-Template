let numberOfDrumButtons = document.querySelectorAll(".drum").length;

let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick-bass.mp3");

// Detecting button press
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      tom1.play();
      break;

    case "a":
      tom2.play();
      break;

    case "s":
      tom3.play();
      break;

    case "d":
      tom4.play();
      break;

    case "j":
      snare.play();
      break;

    case "k":
      crash.play();
      break;

    case "l":
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
