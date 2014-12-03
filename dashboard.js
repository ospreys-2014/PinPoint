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

      cardDiv.setAttribute("class", "video-card");
      grid.appendChild(cardDiv);
    }
  }

  function main(){
    for (note in localStorage){
      var presenter = new PinPoint.VideoPresenter
    }
  }

  main();

})


