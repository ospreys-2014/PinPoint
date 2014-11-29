PinPoint.Note = function(){
  this.noteTime = "";
  this.timeUrl = "";
  this.websiteUrl = ""; //Call function directly here to fill this value in
  this.noteContent = document.getElementById('content').value;
  this.storageKey = this.websiteUrl + Date.now()
}

