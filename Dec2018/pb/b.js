window.onload = function() {
var a = 1;
var popup = window.open("https://www.google.com/?q=plugin_enabled", "FBA", "width=1066,height=628,location=0");
var intervalID = window.setInterval(
function () {
  
popup.postMessage("sending greeting" + a, "https://www.google.com");
a++;
}, 3000);
};





/*
<html>
<head></head>
<body></body>
</html>
*/

