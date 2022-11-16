// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-01-JS/sw.js", {
    scope: "/ICS20-Unit5-01-JS/",
  })
}

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

function guess() {
  const valueFromSlider = parseInt(document.getElementById("slider").value)
  
    // process 
    if (valueFromSlider == randomNumber) {
      document.getElementById("answer").innerHTML =
        "Ding! Ding! Ding! You got it! The answer was " + randomNumber + ". :D"
    }
  
    if (valueFromSlider != randomNumber) {
       document.getElementById("answer").innerHTML =
         "Err...not quite. Try again. :("
    }
}
