function receiveMessage(event) {
  if (event.origin !== "https://www.bing.com")
    return;
console.log(event.data);
}
window.addEventListener("message", receiveMessage, false);
