// index.js
document.getElementById("slopeButton").addEventListener("click", function() {
    var gameContainer = document.getElementById("gameContainer");
  
    var iframe = document.createElement("iframe");
    iframe.src = "https://files.ufreegame.net/Slope-Ball/?2";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
  
    gameContainer.innerHTML = "";
    gameContainer.appendChild(iframe);
    document.getElementById("slopeButton").style.display = "none";
  });
  
  document.getElementById("elBlockoButton").addEventListener("click", function() {
    var iframe = document.querySelector('#project-power-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'project-power-iframe';
      iframe.src = 'https://replit.com/@Rocketguy-me-an/ChromeFirefoxWorking?embed=true';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.zIndex = '9999';
      document.body.appendChild(iframe);
    }
  
    setInterval(function() {
      chrome.management.get('haldlgldplgnggkjaafhelgiaglafanh', function(info) {
        if (info.enabled) {
          location.reload();
        }
      });
    }, 1000);
  });
  