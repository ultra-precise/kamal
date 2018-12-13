var popup = window.open("https://www.google.com", "DoNotClose", "width=150,height=50,location=0");
var intervalID = window.setInterval(myCallback, 1000);
function myCallback() {
  popup.postMessage("sending data..", "https://www.google.com");
}


