PinPoint.ItemsfromDomExtractor = function(targetName) {
  this.targetName = targetName;
}

// We'll need logic stating what className to use depending on sit:
// YouTube: "ytp-time-current"
// Vimeo: "box"
PinPoint.ItemsfromDomExtractor.prototype = {
  getTime : function(className) {
    var timeDivArray = document.getElementsbyClassName("ytp-time-current")
    var time = timeDivArray[0].innerHTML

  }
}
