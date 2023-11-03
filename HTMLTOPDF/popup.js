let convertBtn = document.getElementById('convert-btn');
// let pageSize = document.getElementById('page-size');
// let orient = document.getElementById('orientation');


// // onLoad

// chrome.storage.sync.set({ pageSize: 'A4' });
// chrome.storage.sync.set({ orient: 'portrait' });

// pageSize.addEventListener('change', (e) => {
//   console.log(e.target.value);
//   chrome.storage.sync.set({ pageSize: e.target.value });
// });

// orient.addEventListener('change', (e) => {
//   console.log(e.target.value);
//   chrome.storage.sync.set({ orient: e.target.value });
// });

convertBtn.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id}, 
      // args: [pageSize, orientation], 
      files: ['html2pdf.bundle.min.js', 'convert.js']
    });
  });
});