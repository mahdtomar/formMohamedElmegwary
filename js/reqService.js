const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".button");
btn.addEventListener("click", (e) => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (d) => {
    d.preventDefault();
  });

  ////////////
  const values = [];
  inputs.forEach((input, i) => {
    values.push(input.value);
  });
  const object = {};
  values.forEach((val, i) => {
    object[`${i}`] = val;
  });
  console.log(object);
  //////////////

  //////////////
  const formdata = new FormData(form);
  e.preventDefault();

  console.log(formdata);
});
