const limitInput = document.getElementById("limit");
const saveLimitBtn = document.getElementById("saveLimit");
const resetTotalBtn = document.getElementById("resetTotal");

saveLimitBtn.addEventListener("click", (e) => {
  chrome.storage.sync.set({ limit_threshold: limitInput.value });
  window.close();
});

resetTotalBtn.addEventListener("click", (e) => {
  chrome.storage.sync.set({ total_result: 0 });
});

chrome.storage.sync.get("limit_threshold", (result) => {
  limitInput.value = result.limit_threshold ? result.limit_threshold : 0;
});
