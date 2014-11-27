PinPoint.AssignClassName = function(url) {
  this.url = url;
  this.className = "";

  if (this.url.search("youtube") != -1) {
    this.className = "ytp-time-current"
  }
  return this.className
}
