PinPoint.ItemsfromDomExtractor = function(targetName) {
  this.targetName = targetName;
}

// We'll need logic stating what className to use depending on site:
// YouTube: "ytp-time-current"
// Vimeo: "box"

PinPoint.ItemsFromDomExtractor.prototype = {
  getTime : function(className) {
    var timeDivArray = document.getElementsbyClassName(className);
    var time = timeDivArray[0].innerHTML;
    return time;
  }
}
