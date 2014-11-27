PinPoint.ItemsfromDomExtractor = function(targetName) {
  this.targetName = targetName;
}

PinPoint.ItemsfromDomExtractor.prototype = {
  getElements : function(element) {
    var timeDivArray = document.getElementsbyClassName("ytp-time-current")
    console.log("ytp-time-current")
  }
}
