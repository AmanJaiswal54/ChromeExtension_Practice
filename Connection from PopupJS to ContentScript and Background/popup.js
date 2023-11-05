let convertBtn = document.getElementById("convert-btn");
let pageSize = document.getElementById('page-size');
let orient = document.getElementById('orientation');
let pageSizeValue = pageSize.value;
let orientValue = orient.value;


convertBtn.addEventListener("click", (e) => {
  // how we send data to background.js
  chrome.runtime.sendMessage({ greeting: "hello" });
});

pageSize.addEventListener("change", (e) =>{
  pageSizeValue= e.target.value;
});

orient.addEventListener("change", (e)=>{
  orientValue = e.target.value;
})

convertBtn.addEventListener("click", (e) => {
  // how we send data to content.js
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let params = {
      pageSizeValue,
      orientValue
    }
    chrome.tabs.sendMessage(tabs[0].id, { message: params });
  });
});
