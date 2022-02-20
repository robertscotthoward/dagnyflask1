"use strict";

function log(s) {
  $(".logout").text(s)
}

function vibrate() {
  if (!window) {
    log("No window")
      return;
  }

  if (!window.navigator) {
    log("No window.navigator")
    return;
  }

  if (!window.navigator.vibrate) {
    log("No window.navigator.vibrate")
    return;
  }

  log("Vibrated!")
  window.navigator.vibrate(200);
}

function play(name) {
  var audio = new Audio(`static/sounds/${name}.wav`);
  audio.play("sweep.wav");
}


// https://tonejs.github.io/
function tone(note = 'C4', duration = '8n') {
  const synth = new Tone.Synth().toDestination();
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note, duration);
}

$("#S1").click(function() { tone("C3") })
$("#S2").click(function() { tone("D3") })
$("#S3").click(function() { tone("E3") })
$("#S4").click(function() { tone("F3") })
$("#S5").click(function() { tone("G3") })
$("#S6").click(function() { tone("A3") })
