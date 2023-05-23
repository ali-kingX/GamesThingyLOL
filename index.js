// index.js
document.getElementById("slopeButton").addEventListener("click", function() {
    var iframe = document.createElement("iframe");
    iframe.src = "https://files.ufreegame.net/Slope-Ball/?2";
    iframe.width = "100%";
    iframe.height = "500px";
    document.body.appendChild(iframe);
    document.getElementById("slopeButton").style.display = "none";
  });
  
