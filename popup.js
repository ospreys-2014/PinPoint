// This callback function is called when the content script has been
// injected and returned its results
function onPageDetailsReceived(pageDetails)  {
    document.getElementById('website').value = pageDetails.website;
    document.getElementById('time').value = pageDetails.time;
    document.getElementById('note').innerText = pageDetails.note;
}

// Uses local storage to add a note
function addNote(){
    var note = document.getElementById('note').value;
    localStorage["note"] = note;
    document.getElementById('note-display').innerText = note;
    var newnote = document.getElementById('note-display').innerText;
    chrome.storage.local.set({"value": newnote}, function(){
    console.log('saved');
    }
}

// Event listener for the create note button
document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("save");
    button.addEventListener('click', function(){
        addNote();
    })
})

// When the popup HTML has loaded
window.addEventListener('load', function() {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});



