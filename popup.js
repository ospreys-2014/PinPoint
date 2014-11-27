// This callback function is called when the content script has been
// injected and returned its results
function onPageDetailsReceived(pageDetails)  {
    document.getElementById('website').value = pageDetails.website;
    document.getElementById('time').value = pageDetails.time;
    document.getElementById('note').innerText = pageDetails.note;
}

// When the popup HTML has loaded
document.addEventListener('DOMContentLoaded', function() {
    // var saveButton = document.getElementById('save');

    // console.log("boobs");
    // });


    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});


