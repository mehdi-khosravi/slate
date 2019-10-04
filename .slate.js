// Create Operations
var pushHalfTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/2"
});

var pushHalfBottom = slate.operation("push", {
  "direction" : "bottom",
  "style" : "bar-resize:screenSizeY/2"
});

var pushHalfLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});

var pushHalfRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});

var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});



var pushThirdTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/3"
});


var pushThirdMiddle = slate.operation("push", {
  "direction" : "bottom",
  "style" : "center"
});

var pushThirdBottom = slate.operation("push", {
  "direction" : "bottom",
  "style" : "bar-resize:screenSizeY/3"
});

var throw1 = slate.operation("throw", {
  "screen" : "0"
});

var throw2 = slate.operation("throw", {
  "screen" : "1"
});

var throw3 = slate.operation("throw", {
  "screen" : "2"
});

var modifier = ":ctrl,shift,alt";

slate.bind("1" + modifier, function(win) {
  win.doOperation(throw1);
});

slate.bind("2" + modifier, function(win) {
  win.doOperation(throw2);
});

slate.bind("3" + modifier, function(win) {
  win.doOperation(throw3);
});

slate.bind("up" + modifier, function(win) {
  win.doOperation(pushHalfTop);
});


slate.bind("down" + modifier, function(win) {
  win.doOperation(pushHalfBottom);
});

slate.bind("left" + modifier, function(win) {
  win.doOperation(pushHalfLeft);
});
    
slate.bind("right" + modifier, function(win) {
  win.doOperation(pushHalfRight);
});

slate.bind("return" + modifier, function(win) {
  win.doOperation(fullscreen);
});


slate.bind("i" + modifier, function(win) {
  win.doOperation(pushThirdTop);
});

slate.bind("j" + modifier, function(win) {
  win.doOperation(
    slate.operation("move", {
    "width" : "screenSizeX",
    "height" : "screenSizeY/3",
    "x" : "screenOriginX",
    "y" : "screenSizeY/3 + screenOriginY"
  }))
});

slate.bind("n" + modifier, function(win) {
  win.doOperation(pushThirdBottom);
});
