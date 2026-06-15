chrome.action.onClicked.addListener((tab) => {
  // Open the control panel in a new tab
  chrome.tabs.create({ url: "control.html" });
});

