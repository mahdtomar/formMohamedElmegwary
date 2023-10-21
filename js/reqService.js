const firstPart = document.querySelector(".first-part");
const secondPart = document.querySelector(".second-part");
const FInputs = firstPart.querySelectorAll("input");
const SInputs = secondPart.querySelectorAll("input");
const FSelects = firstPart.querySelectorAll("select");
const sSelect = secondPart.querySelectorAll("select");
const btn = document.querySelector(".button");
const nextBtn = document.querySelector(".nextBtn");
const invoiceContainer = document.querySelector(".invoice");
const progressContainer = document.querySelector(".progress");
console.log(progressContainer.children);
function checkProgress() {
  let count = 0;
  Array.from(progressContainer.children).forEach((child) => {
    child.classList.contains("active") ? count++ : "";
  });
  switch (count) {
    case 2:
      progressContainer.classList.add("two");
      break;
    case 3:
      progressContainer.classList.add("three");
      break;

    default:
      break;
  }
}
nextBtn.addEventListener("click", (e) => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (d) => {
    d.preventDefault();
  });
  ////////////
  let firstFormValues = 0;
  FInputs.forEach((input) => {
    if (input.value !== "") {
      firstFormValues += 1;
      input.classList.remove("req");
    } else {
      input.classList.add("req");
    }
  });
  FSelects.forEach((select) => {
    if (select.value !== "") {
      firstFormValues += 1;
      select.classList.remove("req");
    } else {
      select.classList.add("req");
    }
  });
  console.log(firstFormValues);
  if (firstFormValues === 6) {
    form.classList.add("nextStep");
    progressContainer.children[1].classList.add("active");
  }

  //////////////

  //////////////
  const formdata = new FormData(form);

  console.log(formdata);
  checkProgress();
});
btn.addEventListener("click", () => {
  let secondFormValues = 0;

  SInputs.forEach((input) => {
    console.log(SInputs);
    if (input.value !== "") {
      secondFormValues += 1;
    } else {
      input.parentElement.classList.add("req");
    }
  });
  sSelect.forEach((select) => {
    if (select.value !== "") {
      secondFormValues += 1;
      select.classList.remove("req");
    } else {
      select.classList.add("req");
    }
  });
  checkProgress();
});
function checkSelect() {
  let count = 0;
  sSelect.forEach((i) => {
    i.value !== "" ? count++ : "";
    console.log(count);
  });
  if (count == 2) {
    invoiceContainer.style.display = "block";
  }
}
sSelect.forEach((select) => {
  select.addEventListener("change", () => {
    checkSelect();
  });
});
