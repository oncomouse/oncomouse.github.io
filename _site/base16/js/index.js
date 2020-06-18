function displayCount() {
  var themes = document.querySelector('#theme');
  document.querySelector('#base16-viewer-scheme-count').innerText = themes.options.length;
  document.querySelector('#base16-viewer-scheme-index').innerText = themes.selectedIndex + 1;
  document.querySelector('#base16-viewer-scheme-text').innerText = 'base16-' + themes.value;
}
function loadTheme() {
  var theme = document.querySelector('#theme').value;
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '//cdn.jsdelivr.net/gh/oncomouse/base16-styles/css/base16-' + theme + '.css';
  document.querySelector('head').appendChild(css);
}
function moveSelect(theme, modifier) {
  modifier = modifier || 0;
  var el = document.querySelector('#theme');
  var index = Array.prototype.slice.call(el.options).findIndex(function(x) { return x.value === theme });
  el.selectedIndex = (index >= 0 ? index : 50) + modifier;
}
function change(theme, modifier) {
  moveSelect(theme, modifier);
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    document.querySelector('#theme').dispatchEvent(evt);
  }
  else {
    document.querySelector('#theme').fireEvent("onchange");
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#theme').addEventListener('change', function(ev) {
    window.location.hash = ev.target.value;
    displayCount();
    loadTheme();
  });
  change(window.location.hash === '' ? 'default-dark' : window.location.hash.replace('#', ''));
  document.addEventListener('keypress', function(ev) {
    var theme = window.location.hash.replace('#', '')
    if (ev.keyCode === 106) {
      change(theme, -1);
    } else if (ev.keyCode === 107) {
      change(theme, 1);
    }
  })
});
