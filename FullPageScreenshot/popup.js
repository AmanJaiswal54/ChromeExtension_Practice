let captureBtn = document.getElementById("capture");
var fullPageCheckBox = document.getElementById("full_page");
let formatDropdown = document.getElementById("format");
let fullPageValue = false;
let formatValue = formatDropdown.value;

formatDropdown.addEventListener("change", (e) => {
  formatValue = e.target.value;
});

fullPageCheckBox.addEventListener("change", (e) => {
  fullPageValue = e.target.checked;
});

captureBtn.addEventListener("click", (e) => {
  // how we send data to background.js
  chrome.runtime.sendMessage({ greeting: "hello" });
});

captureBtn.addEventListener("click", (e) => {
  // how we send data to content.js
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let params = { formatValue, fullPageValue };
    chrome.tabs.sendMessage(tabs[0].id, { message: params });
  });
});
