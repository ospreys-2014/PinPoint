// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   console.log(request.website);
// })

// This function is called onload in the popup code
function getPageDetails(callback) {
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  {
        // Call the callback function
        callback(message);
    });
};


    // return function addNote() {
    //   var note = document.getElementById('note').value;
    //   chrome.storage.local.set({"value": note});
    //   console.log(note);
    //     //     document.getElementById('note-display').innerText = note;
    //     //     var newnote = document.getElementById('note-display').innerText;
    //     //     chrome.storage.local.set({"value": newnote}, function(){
    //     //         console.log('saved');

