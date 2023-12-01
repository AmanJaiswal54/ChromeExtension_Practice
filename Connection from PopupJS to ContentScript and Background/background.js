console.log("HELLO FROM BACKGROUND");

// how we receive data from popup.js
chrome.runtime.onMessage.addListener((msg, sender, res) => {
  console.log("background---", msg);
});

// how we receive data from content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("request", request);
  if (request.type == "HOHOHO")
  setTimeout(() => {
    console.log('Hello HOHOHO');
  }, 5000);

  sendResponse();
});
