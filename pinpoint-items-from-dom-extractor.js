PinPoint.ItemsfromDomExtractor = function(targetName) {
  this.targetName = targetName;
}

// We'll need logic stating what className to use depending on site:
// YouTube: "ytp-time-current"
// Vimeo: "box"

// Returns the current time of the video at the time the function was called.
PinPoint.ItemsFromDomExtractor.prototype = {
  getTime: function(className) {
    var timeDivArray = document.getElementsByClassName(className);
    var time = timeDivArray[0].innerHTML;
    return time;
  }

// Gets URL for use with assignClassName function
  getUrl: function() {
    var url = document.URL
    return url
  }
}
