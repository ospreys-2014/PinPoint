// This callback function is called when the content script has been
// injected and returned its results
// function onPageDetailsReceived(pageDetails)  {
//     document.getElementById('website').value = pageDetails.website;
//     document.getElementById('time').value = pageDetails.time;
//     document.getElementById('note').innerText = pageDetails.note;
// }

// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
}

// Event listener for the create note button
var button = document.getElementById("save");

button.addEventListener('click', function(){
    note = new PinPoint.Note();
    storeToLocalStorage(note);

    // PinPoint.Note.Controller.addNote(note);
})

function addNote(){
    var note = document.getElementById('note').value;
    localStorage["note"] = note;
    document.getElementById('note-display').innerText = note;
    var newnote = document.getElementById('note-display').innerText;
    // chrome.storage.local.set({"value": newnote}, function(){
    // console.log('saved');
    // }
}

// Event listener for the create note button
    document.addEventListener('DOMContentLoaded', function(){
        var button = document.getElementById("save");
        var link = document.getElementById("test_link");
        button.addEventListener('click', function(){
            addNote();
        });

        link.addEventListener('click', function(){
            var url = setURL();
            chrome.tabs.update(null, {url: url + "t=0m26s"});
        });
    })

    function setURL(pageDetails){
        console.log(pageDetails);
        var url = pageDetails.website;
        return url
    }


for (i=0; i<localStorage.length; i++)   {
    console.log(localStorage.key(i)+"=["+localStorage.getItem(localStorage.key(i))+"]");

}

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



