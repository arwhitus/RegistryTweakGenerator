// individual tweaks
var disableBingStart = {
    title: "Disable Bing Results in Windows Search",
    lines: ['[HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows\\Explorer]',
        '"DisableSearchBoxSuggestions"=dword:00000001'],
    revlines: ['[HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows\\Explorer]',
        '"DisableSearchBoxSuggestions"=dword:00000000'],
    html: "",
    selected: 0
};

var disableCortana = {
    title: "Disable Cortana",
    lines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search]',
        '"AllowCortana"=dword:00000000'],
    revlines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search]',
        '"AllowCortana"=dword:00000001'],
    html: "",
    selected: 0
};

var disableLockScreen = {
    title: "Disable Lock Screen",
    lines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization]',
        '"NoLockScreen"=dword:00000001'],
    revlines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization]',
        '"NoLockScreen"=dword:00000000'],
    html: "",
    selected: 0
};

var disableYourPhone = {
    title: "Disable Your Phone App",
    lines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System]',
        '"EnableMmx"=dword:00000000'],
    revlines: ['[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System]',
        '"EnableMmx"=dword:00000001'],
    html: "",
    selected: 0
};

var printScreenScreenSnip = {
    title: "Launch Snip and Sketch with the Print Screen Key",
    lines: ['[HKEY_CURRENT_USER\\Control Panel\\Keyboard]',
        '"PrintScreenKeyForSnippingEnabled"=dword:00000001'],
    revlines: ['[HKEY_CURRENT_USER\\Control Panel\\Keyboard]',
        '"PrintScreenKeyForSnippingEnabled"=dword:00000000'],
    html: "",
    selected: 0
};

var showSeconds = {
    title: "Show Seconds In System Clock",
    lines: ['[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]',
        '"ShowSecondsInSystemClock"=dword:00000001'],
    revlines: ['[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]',
        '"ShowSecondsInSystemClock"=-'],
    html: "",
    selected: 0
};

// combined tweaks
var tweaks = [disableBingStart, disableCortana, disableLockScreen, disableYourPhone, printScreenScreenSnip, showSeconds];