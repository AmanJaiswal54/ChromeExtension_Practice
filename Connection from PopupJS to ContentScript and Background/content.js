console.log("HELLO FROM CONTENT SCRIPT");

// how we receive data from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendresponse) {
  var element = document.body;
  var opt = {
    margin: 0.25,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    enableLinks: true,
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: request.message.pageSizeValue,
      orientation: request.message.orientValue,
    },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
});
