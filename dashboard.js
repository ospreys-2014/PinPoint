var PinPoint = PinPoint || {}; /// becca needs http://img.youtube.com/vi/<id>/hqdefault. 

window.addEventListener('load', function(){
  // VideoPresenter class used to draw content on
  // dashboard.html
  PinPoint.VideoPresenter = function(url) {
    this.url = url;
    this.present();
  }

  PinPoint.VideoPresenter.prototype = {
    // creates a div with the propper attributes
    present: function() {
      var grid = document.getElementById("grid");
      var cardDiv = document.createElement("div");
      var flipContainer = document.createElement("div");
      var flipper = document.createElement("div");
      var front = document.createElement("div");
      var backLink = document.createElement("a");
      var back = document.createElement("div");
      var thumbnail = document.createElement("img");
      var title = document.createElement("h3");
      var count = document.createElement("p");

      cardDiv.setAttribute("class", "video-card");
      grid.appendChild(cardDiv);

      flipContainer.setAttribute("class", "flip-container");
      flipContainer.setAttribute("ontouchstart", "this.classList.toggle('hover');");

      cardDiv.appendChild(flipContainer);
      flipper.setAttribute("class", "flipper");
      flipContainer.appendChild(flipper);

      front.setAttribute("class", "front");
      thumbnail.setAttribute("src", this.youtubeImageGen());
      front.appendChild(thumbnail);
      back.setAttribute("class", "back");
      title.innerHTML = this.getNoteTitle();
      back.appendChild(title);
      count.setAttribute("class", "count-p");
      count.innerHTML = this.noteCount();
      back.appendChild(count);

      backLink.setAttribute("href", this.url);
      backLink.setAttribute("target", "_blank");
      backLink.appendChild(back)

      flipper.appendChild(front);
      flipper.appendChild(backLink);
    },

    // parses a youtube url for the YoutubeImageGen function
    youtubeParser: function(){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = this.url.match(regExp);
      if (match&&match[7].length==11){
        return match[7];
      }
    },

    // returns url of img for the video
    youtubeImageGen: function(){
      return "http://img.youtube.com/vi/" + this.youtubeParser() + "/hqdefault.jpg";
    },

    // returns the number of note objects in the note array
    noteCount: function(){
      return JSON.parse(localStorage[this.url]).length
    },

    // returns the title of the page
    getNoteTitle: function(){
      return JSON.parse(localStorage[this.url])[0].title
    }
  }

// main loop attaches a VideoPresenter instance for every
// video that has notes. Exception for "enabled" key in
// localStorage.
  function main(){
    for (url in localStorage){
      if (url != "enabled"){
        var presenter = new PinPoint.VideoPresenter(url)
      }
    }
  }

  main();

});


