function receiveMessage(event) {
  
	if (event.origin !== "https://www.bing.com")
    
	return;

	console.log(event.data);

}
document.body.textContent = "Hello!";
document.title = "FBA";
window.addEventListener("message", receiveMessage, false);

