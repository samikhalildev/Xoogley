let file = 'images/xoogley.png';
let image = chrome.extension.getURL(file);
document.body.style.background = `#222222 url(${image}) no-repeat center fixed`;
document.body.style.backgroundSize = 'cover';
