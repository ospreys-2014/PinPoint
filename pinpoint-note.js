PinPoint.Note = function(){
  this.noteTime = "";
  this.timeUrl = "";
  this.websiteUrl = "https://www.youtube.com/watch?v=70Tfg8nnnMg"; //Call function directly here to fill this value in
  this.noteContent = document.getElementById('content').value;
  this.storageKey = this.websiteUrl + "/" + Date.now()
}

