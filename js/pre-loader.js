var loader;

function loadNow(loadTime) {
  if (loadTime <= 0) {
    displayContent();
  } else {
    window.setTimeout(function () {
      loadNow(loadTime - 0.02);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("content").style.display = "none";
  loader = document.getElementById("loader");
  loadNow(1);
});
