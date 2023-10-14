const firstForm = document.querySelector(".sub-container");
const firstFormInputs = firstForm.querySelectorAll("input");
const firstformSelect = firstForm.querySelectorAll("select");
const nextBtn = document.querySelector(".forward");
const secondForm = document.querySelector(".second-form");
const secondFromSelect = secondForm.querySelectorAll("select");
const secondFormInput = secondForm.querySelectorAll("input");
const formBtn = secondForm.querySelector("button");
nextBtn.addEventListener("click", () => {
  let goodInputs = 0;
  let goodSelect = 0;
  firstFormInputs.forEach((input) => {
    console.log(input, input.value);
    if (input.value !== "") {
      goodInputs += 1;
      input.classList.remove("req");
    } else {
      input.classList.add("req");
    }
  });
  firstformSelect.forEach((select) => {
    console.log(select, select.value);
    if (select.value !== "") {
      goodSelect += 1;
      select.classList.remove("req");
    } else {
      console.log(select);
      select.classList.add("req");
    }
    console.log(goodInputs, goodSelect);
  });
  if (goodInputs === 4 && goodSelect === 2) {
    firstForm.style.display = "none";
    secondForm.style.display = "block";
  }
});
formBtn.addEventListener("click", (e) => {
  let secondSelect = 0;
  let secondInput = 0;
  secondFromSelect.forEach((select) => {
    if (select.value !== "") {
      secondSelect += 1;
      select.parentElement.classList.remove("req");
    } else {
      select.parentElement.classList.add("req");
    }
  });
  secondFormInput.forEach((input) => {
    if (input.value !== "") {
      secondInput += 1;
      input.parentElement.classList.remove("req");
    } else {
      input.parentElement.classList.add("req");
    }
  });
  if (secondInput === 3 && secondSelect === 2) {
    // data submition goes here
  } else {
    e.preventDefault();
  }
});
