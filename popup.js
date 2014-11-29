// This callback function is called when the content script has been
// injected and returned its results
// function onPageDetailsReceived(pageDetails)  {
//     document.getElementById('website').value = pageDetails.website;
//     document.getElementById('time').value = pageDetails.time;
//     document.getElementById('note').innerText = pageDetails.note;
// }

// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(Date.now(), JSON.stringify(note));
}

// Event listener for the create note button
var button = document.getElementById("save");

button.addEventListener('click', function(){
    note = new PinPoint.Note();
    storeToLocalStorage(note);
    // localStorage["note"] = note.noteContent;
    // alert(note.noteContent);
    // console.log("sweet")
    // PinPoint.Note.Controller.addNote(note);
})

// go through all the keys in localstorage
// take the ones that begin with the correct url using regex(underscore)
// find the values, put them in an array, iterate over the array and parse values


// When the popup HTML has loaded
window.addEventListener('load', function() {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        // eventPage.getPageDetails(onPageDetailsReceived);
    });
});



