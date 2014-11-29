PinPoint.Note = function(){
  this.noteTime = "";
  this.timeUrl = "";
  this.websiteUrl = "";
  this.noteContent = document.getElementById('content').value;
  this.storageKey = ""
}

PinPoint.Note.prototype.assignURL = function(){
  this.websiteUrl = localStorage.url;
  this.noteTime = localStorage.time;
};

PinPoint.Note.prototype.assignTimeUrl = function(){
  this.timeUrl  = localStorage.timeUrl;
};

PinPoint.Note.prototype.assignStorageKey = function(){
  this.storageKey = this.websiteUrl + "/" + Date.now()
}
