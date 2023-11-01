const contextMenuItem = {
  id: "spendMoney",
  title: "SpendMoney",
  contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId === contextMenuItem.id && clickData.selectionText) {
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(["total_result", "limit_threshold"], (result) => {
        let newTotal = 0;
        if (result.total_result) {
          newTotal = newTotal + parseInt(result.total_result);
        }
        let amount = clickData.selectionText;
        if (amount) {
          newTotal = newTotal + parseInt(amount);
        }

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
    }
  }
});

chrome.storage.onChanged.addListener(function (changes, storageName) {
  chrome.action.setBadgeText({
    text: changes.total_result.newValue.toString(),
  });
});

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}
