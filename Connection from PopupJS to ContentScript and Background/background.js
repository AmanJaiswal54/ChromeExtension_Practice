console.log("HELLO FROM BACKGROUND");

// how we receive data from popup.js
chrome.runtime.onMessage.addListener((msg, sender, res) => {
  console.log("background---", msg);
});