// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
};

// Event listener for the create note button
var button = document.getElementById("create");
var form = document.getElementById("add-note");
button.addEventListener('click', function(){
  button.style.display = "none";
  form.style.display = "inline"

    note = new PinPoint.Note();
    storeToLocalStorage(note);
});

// working on loop for regex application
function parseLocalStorage(url){
    for (i in localStorage) {
        if (i.match(/^\w+\:\/\/www.youtube.com\/watch\?v=.+\//)) {
            PinPoint.NoteController.storeNote()
        }
        // i.match(url)
    }
}


// go through all the keys in localstorage
// take the ones that begin with the correct url using regex(underscore)
// find the values, put them in an array, iterate over the array and parse values

// When the popup HTML has loaded
//***** Need to change this to different event so we aren't
// getting time on load, but click event instead *******
window.addEventListener('load', function() {

//parser will provide an array of notes to pass into PinPoint.NoteController(notes)
  controller = new PinPoint.NoteController(notes);
  controller.defineView(new PinPoint.View());
  controller.redraw();
  //get the event page
  chrome.runtime.getBackgroundPage(function(eventPage) {
      // Call the getTime function in the event page, passing in
      // our onPageDetailsReceived function as the callback. This injects
      // content.js into the current tab's HTML

      // jenbex testing note controller functions without lack of note object blocking us
      // ****** eventPage.getPageDetails(PinPoint.NoteController.getTime);
      // var note = {noteTime: "9:30", timeUrl: ""}
      // PinPoint.NoteController.getUrl(note);

  });
});



