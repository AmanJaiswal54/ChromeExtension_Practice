console.log("Hello from Background");

chrome.contextMenus.create({
  id: "speak",
  title: "Speak",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
  console.log("clickData", clickData);
  if (clickData.menuItemId === "speak" && clickData.selectionText) {
    chrome.tts.speak(clickData.selectionText, { 'lang': 'en-GB', 'rate': 1.0 });
  }
});
