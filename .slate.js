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

var pushTwoThirdTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY - screenSizeY/3"
});

var pushThirdMiddle = slate.operation("move", {
    "width" : "screenSizeX",
    "height" : "screenSizeY/3",
    "x" : "screenOriginX",
    "y" : "screenSizeY/3 + screenOriginY"
  });

var pushThirdBottom = slate.operation("push", {
  "direction" : "bottom",
  "style" : "bar-resize:screenSizeY/3"
});

var pushTwoThirdBottom = slate.operation("push", {
  "direction" : "bottom",
  "style" : "bar-resize:screenSizeY - screenSizeY/3"
});

var pushThirdLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/3"
});

var pushTwoThirdLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX - screenSizeX/3"
});

var pushThirdRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/3"
});

var pushTwoThirdRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX - screenSizeX/3"
});


var pushThirdCenter = slate.operation("move", {
  "width" : "screenSizeX/3",
  "height" : "screenSizeY",
  "x" : "screenSizeX/3 + screenOriginX",
  "y" : "screenOriginY"
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

slate.bind("u" + modifier, function(win) {
  win.doOperation(pushTwoThirdTop);
});

slate.bind("j" + modifier, function(win) {
  win.doOperation(pushThirdMiddle);
});

slate.bind("n" + modifier, function(win) {
  win.doOperation(pushThirdBottom);
});

slate.bind("b" + modifier, function(win) {
  win.doOperation(pushTwoThirdBottom);
});


slate.bind("k" + modifier, function(win) {
  win.doOperation(pushThirdLeft);
});

slate.bind("o" + modifier, function(win) {
  win.doOperation(pushTwoThirdLeft);
});

slate.bind("l" + modifier, function(win) {
  win.doOperation(pushThirdCenter);
});

slate.bind(";" + modifier, function(win) {
  win.doOperation(pushThirdRight);
});

slate.bind("[" + modifier, function(win) {
  win.doOperation(pushTwoThirdRight);
});
