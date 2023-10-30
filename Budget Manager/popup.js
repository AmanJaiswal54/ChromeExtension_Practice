const submitBtn = document.getElementById("submit");
const amountInput = document.getElementById("amount");
const totalSpendH2 = document.getElementById("total");
const limitDiv = document.getElementById("limit");

submitBtn.addEventListener("click", (e) => {
  chrome.storage.sync.get(["total_result", "limit_threshold"], (result) => {
    let newTotal = 0;
    if (result.total_result) {
      newTotal = newTotal + parseInt(result.total_result);
    }
    let amount = amountInput.value;
    if (amount) {
      newTotal = newTotal + parseInt(amount);
    }

    totalSpendH2.innerText = newTotal;
    amountInput.value = "";

    chrome.storage.sync.set({ total_result: newTotal }, () => {
      if (newTotal >= Number(result.limit_threshold)) {
        const limitReachedNotification = {
          type: "basic",
          title: "Limit Reached",
          iconUrl: "icon.png",
          message: "Looks like you have reached your limits",
        };
        chrome.notifications.create(
          "limitReachedNotification",
          limitReachedNotification
        );
      }
    });
  });
});

chrome.storage.sync.get(["total_result", "limit_threshold"], (result) => {
  totalSpendH2.innerText = result.total_result ? result.total_result : 0;

  limitDiv.innerText = result.limit_threshold ? result.limit_threshold : 0;
});
