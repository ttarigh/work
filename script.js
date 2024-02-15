/// Popup
document.addEventListener("DOMContentLoaded", function () {
  function showLightboxPopup() {
    var lightboxPopup = document.getElementById("lightbox-popup");
    var overlay = document.getElementById("overlay");
    lightboxPopup.style.display = "block";
    overlay.style.display = "block";

    var closeButton = document.getElementById("close-btn");

    closeButton.addEventListener("click", function () {
      lightboxPopup.style.display = "none";
      overlay.style.display = "none";
    });
  }

  setTimeout(showLightboxPopup, 3000);
});

// TOGGLE BUTTON
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-shadow-box");
  var shadowBox = document.getElementById("lightbox-popup");
  var overlay = document.getElementById("overlay");

  function toggleShadowBox() {
    shadowBox.style.display =
      shadowBox.style.display === "block" ? "none" : "block";
    overlay.style.display = "block";
  }
  toggleButton.addEventListener("click", toggleShadowBox);
});

// Dynamic Header
document.addEventListener("DOMContentLoaded", function () {
  const dynamicWords = [
    " is an artist.",
    " is a creative technologist.",
    " is a computer scientist.",
    " is a fashionista.",
    " is a music visualizer.",
  ];
  let dynamicWordIndex = 0;

  function changeDynamicWord() {
    dynamicWordIndex = (dynamicWordIndex + 1) % dynamicWords.length;
    return dynamicWords[dynamicWordIndex];
  }
  setInterval(function () {
    const dynamicWordElement = document.getElementById("dynamic-word");
    if (dynamicWordElement) {
      dynamicWordElement.textContent = changeDynamicWord();
    }
  }, 1000);

  window.addEventListener("scroll", function () {
    const ogHeader = document.getElementById("notScrolled");
    const smallHeader = document.getElementById("Scrolled");
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
      ogHeader.style.display = "none";
      smallHeader.style.display = "block";
      header.style.textAlign = "left";
    } else {
      if (!isExpanded) {
        ogHeader.style.display = "block";
        smallHeader.style.display = "none";
      }
    }
  });

  // Change the dynamic word every 1 second
});

var isExpanded = false;

document.addEventListener("DOMContentLoaded", function () {
  var moreLink = document.getElementById("more-link");
  var header = document.querySelector("header");
  var moreInfo = document.getElementById("moreInfo");

  moreLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    header.classList.toggle("expanded"); // Toggle the 'expanded' class

    // Change the text of the link based on the header's state
    if (header.classList.contains("expanded")) {
      isExpanded = true;
      moreLink.textContent = "{...less}";
      moreInfo.style.display = "block";
      header.style.backgroundColor = "orange";
    } else {
      isExpanded = false;
      moreLink.textContent = "{more...}";
      moreInfo.style.display = "none";
      header.style.backgroundColor = "white";
    }
  });
});

function showLabel(letter, title) {
  const label = document.getElementById("labels");
  const dynamicWord = document.getElementById("dynamic-word");
  label.textContent = "'s " + title;
  label.style.display = "inline-block";
  dynamicWord.style.display = "none"; 

}

function hideLabel(letter) {
    const label = document.getElementById("labels");
    const dynamicWord = document.getElementById("dynamic-word");
    dynamicWord.style.display = "inline-block"; 
    label.style.display = "none";
}
