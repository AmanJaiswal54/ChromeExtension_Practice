console.log("HELLO FROM CONTENT SCRIPT");

// how we receive data from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendresponse) {
  console.log("message", request.message);

  const { formatValue, fullPageValue } = request.message;
  console.log("formatValue", formatValue);
  console.log("fullPageValue", fullPageValue);

  // https://api.apiflash.com/v1/urltoimage?access_key=29ac504aa6254f64bb9b4e5a2b9c1726&wait_until=page_loaded&url=http://google.com

//   fetch(
//     `https://api.apiflash.com/v1/urltoimage?access_key=29ac504aa6254f64bb9b4e5a2b9c1726&full_page=${fullPageValue}&scroll_page=true&wait_until=page_loaded&url=${window.location.href}`
//   ).then((response) => {
//     response.blob().then((blob) => {
//       let a = document.createElement("a");
//       a.href = window.URL.createObjectURL(blob);
//       a.download = `screenshot.${formatValue}`;
//       document.body.appendChild(a);
//       a.click();
//     });
//   });
});
