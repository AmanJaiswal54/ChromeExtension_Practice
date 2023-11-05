let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", (e) => {
  // how we send data to background.js
  chrome.runtime.sendMessage({ greeting: "hello" });
});

convertBtn.addEventListener("click", (e) => {
  // how we send data to content.js
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: e.target.innerText });
  });
});
