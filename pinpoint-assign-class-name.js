PinPoint.AssignClassName = function(url) {
  this.url = url;
  this.className = "";

  if (this.url.search("youtube") != -1) {
    this.className = "ytp-time-current"
  }
  return this.className

  //How do we ensure that this function only runs if we're on a 'valid'
  //site that we have a classname for? This will break if we go to Vimeo.
  //Also, do we need to declare this.className on line 3 and why?
}
