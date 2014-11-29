// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

// Event listener for the create note button
var button = document.getElementById("save");

button.addEventListener('click', function(){
    var note = new PinPoint.Note();
    PinPoint.NoteController.getUrl();
    note.assignURL();
    note.assignTimeUrl();
    PinPoint.NoteController.formatTimeUrl(note);
    note.assignStorageKey();
    storeToLocalStorage(note);
});

// working on loop for regex application
// for (i=0; i<localStorage.length; i++)   {
//     console.log(localStorage.key(i)+"=["+localStorage.getItem(localStorage.key(i))+"]");
// }

// go through all the keys in localstorage
// take the ones that begin with the correct url using regex(underscore)
// find the values, put them in an array, iterate over the array and parse values

// When the popup HTML has loaded
//***** Need to change this to different event so we aren't
// getting time on load, but click event instead *******
window.addEventListener('load', function() {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getTime function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML

        // jenbex testing note controller functions without lack of note object blocking us
        eventPage.getPageDetails(PinPoint.NoteController.getTime);
        // var note = {noteTime: "9:30", timeUrl: ""}
        // PinPoint.NoteController.getUrl(note);

    });
});



