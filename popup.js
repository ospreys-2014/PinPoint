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
        // ****** eventPage.getPageDetails(PinPoint.NoteController.getTime);
        // var note = {noteTime: "9:30", timeUrl: ""}
        // PinPoint.NoteController.getUrl(note);
    });
});



