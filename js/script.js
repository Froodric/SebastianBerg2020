var btnContainer = document.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnContainer.length; i++) {
  btnContainer[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
window.ondragstart = function () {
  return false;
};

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("contextmenu", (event) => event.preventDefault());
}
