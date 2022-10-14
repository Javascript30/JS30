const inputs = document.querySelectorAll(".controls input");

const handleUpdate = () => {
  console.log(this);
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
