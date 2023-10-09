const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    inputs.forEach((i) => {
      i.removeAttribute("checked");
    });
    e.target.setAttribute("checked", "ture");
  });
});

const Nextbtn = document.getElementById("next");
Nextbtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (input.hasAttribute("checked")) {
      Nextbtn.setAttribute("href", input.getAttribute("data-link"));
    }
  });
});
