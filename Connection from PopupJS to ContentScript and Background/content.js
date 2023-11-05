console.log("HELLO FROM CONTENT SCRIPT");

// how we receive data from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendresponse) {
  console.log("content script---", request);
  html2pdf(document.body);
});
