// Store frame for motion functions
var previousFrame;
var paused = false;
var pauseOnGesture = false;

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {
  if (paused) {
    return; // Skip this update
  }

  // Display Gesture object data
  if (frame.gestures.length > 0) {
    if (pauseOnGesture) {
      togglePause();
    }
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];


      switch (gesture.type) {
        case "circle":
          break;
        case "swipe":
          if(gesture.state == "start"){
            impress().next();
          }
          break;
        case "screenTap":
        case "keyTap":
        default:
      }
    }
  }
  else {
  }

  // Store frame for motion functions
  previousFrame = frame;
})
