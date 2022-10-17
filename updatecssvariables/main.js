const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
let suffix = input.dataset.sizing || '';
  input.addEventListener("change", function() {
    document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix)
  })
  input.addEventListener("mouseover", function() {
    document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix)
  })
});

