// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

// Event listener for the create note button
var button = document.getElementById("save");
button.addEventListener('click', function(){
    var note = new PinPoint.Note();
    PinPoint.NoteController.run(note);
});

// When the popup HTML has loaded
//***** Need to change this to different event so we aren't
// getting time on load, but click event instead *******
window.addEventListener('load', function() {
    PinPoint.NoteController.getUrl();
    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(PinPoint.NoteController.getTime);
    });
});


