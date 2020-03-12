browser.commands.onCommand.addListener(async function(command) {
    const idx = command.slice(-1) % 9 - 1;
    const tabs = await browser.tabs.query({ currentWindow: true, hidden: false});
    const tab = tabs.slice(idx);
    if (tab.length) {
        browser.tabs.update(tab[0].id, { active: true });
    }
});
