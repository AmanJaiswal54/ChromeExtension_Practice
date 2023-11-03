chrome.action.onClicked.addListener(async (tab) => {
  // chrome.scripting.insertCSS({
  //   target: { tabId: tab.id },
  //   files: ["styles.css"],
  // });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["html2pdf.bundle.min.js"],
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "html2pdf_complete") {
    chrome.downloads.download({ url: request.pdf });
  }
});
