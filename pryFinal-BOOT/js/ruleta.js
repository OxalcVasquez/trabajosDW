var theWheel = new Winwheel({
  outerRadius: 212, // Set outer radius so wheel fits inside the background.
  innerRadius: 75, // Make wheel hollow so segments don't go all way to center.
  textFontSize: 12, // Set default font size for the segments.
  textOrientation: "horizontal", // Make text vertial so goes down from the outside of wheel.
  textAlignment: "outer", // Align text to outside of wheel.
  numSegments: 8, // Specify number of segments.
  // Define segments including colour and text.
  // Define segments including colour and text.
  segments: [
    { fillStyle: "#FFE6BD", text: "DESCUENTO 50%" },
    { fillStyle: "#FFE6BD", text: "GIRO GRATIS" },
    { fillStyle: "#FFE6BD", text: "SIGUE INTENTANDO" },
    { fillStyle: "#FFE6BD", text: "DESCUENTO 15%" },
    { fillStyle: "#FFE6BD", text: "SERVICIO 50%" },
    { fillStyle: "#FFE6BD", text: "DESCUENTO 50%" },
    { fillStyle: "#FFE6BD", text: "DESCUENTO 5%" },
    { fillStyle: "#FFE6BD", text: "SERVICIO 15%" },
    { fillStyle: "#FFE6BD", text: "SIGUE INTENTANDO", textFontSize: 12 },
  ],
  // Specify the animation to use.
  animation: {
    type: "spinToStop",
    duration: 8, // Duration in seconds.
    spins: 3, // Default number of complete spins.
    callbackFinished: alertPrize,
    callbackSound: playSound, // Specify function to call when sound is to be triggered
  },
});

// Vars used by the code in this page to do power controls.
var wheelPower = 1;
var wheelSpinning = false;


// function powerSelected(powerLevel) {
//   // Ensure that power can't be changed while wheel is spinning.
//   if (wheelSpinning == false) {
//     // Reset all to grey incase this is not the first time the user has selected the power.
//     document.getElementByC("pw1").className = "";
//     document.getElementById("pw2").className = "";
//     document.getElementById("pw3").className = "";

//     // Now light up all cells below-and-including the one selected by changing the class.
//     if (powerLevel >= 1) {
//       document.getElementById("pw1").className = "pw1";
//     }

//     if (powerLevel >= 2) {
//       document.getElementById("pw2").className = "pw2";
//     }

//     if (powerLevel >= 3) {
//       document.getElementById("pw3").className = "pw3";
//     }

//     // Set wheelPower var used when spin button is clicked.
//     wheelPower = powerLevel;

//     // Light up the spin button by changing it's source image and adding a clickable class to it.
//     document.getElementById("spin_button").src = "spin_on.png";
//     document.getElementById("spin_button").className = "clickable";
//   }
// }

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
  // Ensure that spinning can't be clicked again while already running.
  if (wheelSpinning == false) {
    theWheel.animation.spins = 3;
    document.getElementById("spin_button");
    document.getElementById("spin_button").className = "";

    // Begin the spin animation by calling startAnimation on the wheel object.
    theWheel.startAnimation();

    wheelSpinning = true;
  }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel() {
  theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
  theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
  theWheel.draw(); // Call draw to render changes to the wheel.
  wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// -------------------------------------------------------


let audio = new Audio("../media/tick.mp3"); // Create audio object and load desired file.

function playSound() {
  // Stop and rewind the sound (stops it if already playing).
  audio.pause();
  audio.currentTime = 0;

  // Play the sound.
  audio.play();
}

function alertPrize(indicatedSegment) {
  // Just alert to the user what happened.
  // In a real project probably want to do something more interesting than this with the result.
  if (indicatedSegment.text == "SIGUE INTENDADO") {
    alert("SIGUE INTENTADO.");

  } else if (indicatedSegment.text == "GIRO GRATIS") {
    alert("GANASTE UN INTENTO ADICIONAL");
  } else {
    alert("FELICITACIONES GANASTE : " + indicatedSegment.text);
  }
}

