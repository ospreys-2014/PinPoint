// This callback function is called when the content script has been
// injected and returned its results
function onPageDetailsReceived(pageDetails)  {
    document.getElementById('website').value = pageDetails.website;
    document.getElementById('time').value = pageDetails.time;
    document.getElementById('note').innerText = pageDetails.note;
}


// POST the data to the server using XMLHttpRequest


// When the popup HTML has loaded
window.addEventListener('load', function() {
    statusDisplay = document.getElementById('note-display');
    document.getElementById('add-note').addEventListener('click', "submit", function(){
        console.log("button linked!")
    });

    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
