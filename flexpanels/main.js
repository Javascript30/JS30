const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", function() {
    panel.classList.toggle("open");
  })
);
panels.forEach((panel) =>
  panel.addEventListener("transitionend", function(e) {
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("open-active");
    }
  })
);
