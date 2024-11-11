// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// Disable copy function
document.addEventListener("copy", function (e) {
  e.preventDefault();
});
