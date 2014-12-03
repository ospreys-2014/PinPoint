var PinPoint = PinPoint || {};

/// becca needs http://img.youtube.com/vi/<id>/hqdefault.
window.addEventListener('load', function(){
  PinPoint.VideoPresenter = function() {
    // this.url = url;
    this.linkNodeType = "a";
    this.imageNodeType = "img";
    this.present();
  }

  PinPoint.VideoPresenter.prototype = {
    present: function() {
      var grid = document.getElementById("grid");
      var cardDiv = document.createElement("div");
      var flipContainer = document.createElement("div");
      var flipper = document.createElement("div");
      var front = document.createElement("div");
      var back = document.createElement("div");

      cardDiv.setAttribute("class", "video-card");
      grid.appendChild(cardDiv);

      flipContainer.setAttribute("class", "flip-container");
      flipContainer.setAttribute("ontouchstart", "this.classList.toggle('hover');");

      cardDiv.appendChild(flipContainer);
      flipper.setAttribute("class", "flipper");
      flipContainer.appendChild(flipper);

      front.setAttribute("class", "front");
      back.setAttribute("class", "back");

      flipper.appendChild(front);
      flipper.appendChild(back);
    }
  }

  function main(){
    for (note in localStorage){
      var presenter = new PinPoint.VideoPresenter()
    }
  }

  main();

})


