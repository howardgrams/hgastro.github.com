document.addEventListener("DOMContentLoaded", function () {
    let message;
    if (window.matchMedia("(any-hover: hover)").matches) {
      message = "(Move mouse over image to show notes, mouse off image to restore original image.)";
    } else {
      message = "(Tap image to show notes and tap away from image to restore original image. Pinch-zoom out to enlarge image.)";
    }
  
    let infoElement = document.createElement("i");
    infoElement.innerHTML = `<small><font color="fuchsia">${message}</font></small><br>`;
  
    let target = document.getElementById("explainnotes-target"); // Placeholder div in your HTML
    if (target) {
      target.appendChild(infoElement);
    }
  });
  