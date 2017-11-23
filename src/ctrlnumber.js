function switchTab(tab) {
    if (tab == -1) {
        chrome.tabs.query({ currentWindow: true }, function(tabs) {
            switchTab(tabs.length - 1);
        });
        return;
    }

    chrome.tabs.query({ currentWindow: true, index: tab }, function(tabs) {
        if (tabs.length == 1) {
            chrome.tabs.update(tabs[0].id, { active: true });
        }
    });
}

chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
    case "switch-tab-1": return switchTab(0);
    case "switch-tab-2": return switchTab(1);
    case "switch-tab-3": return switchTab(2);
    case "switch-tab-4": return switchTab(3);
    case "switch-tab-5": return switchTab(4);
    case "switch-tab-6": return switchTab(5);
    case "switch-tab-7": return switchTab(6);
    case "switch-tab-8": return switchTab(7);
    case "switch-tab-9": return switchTab(-1);
    }
});
