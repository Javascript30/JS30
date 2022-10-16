const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) =>
  input.addEventListener("change", function() {
    console.log(input.value);
  })
);


inputs.forEach((input) =>
  input.addEventListener("mouseover", function() {
    console.log(input.value);
  })
);
