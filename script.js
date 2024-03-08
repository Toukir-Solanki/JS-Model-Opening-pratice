"use strict";
//-------basic---------------
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close = document.querySelector(".close-modal");
const btn_openAll = document.querySelectorAll(".show-modal");
const btn_Close_model = document.querySelector(".close-modal");

//-------basic---------------
const toggle_model = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

//-------Open the model---------------
btn_openAll.forEach((btn) => btn.addEventListener("click", toggle_model));

//-------Close the model---------------
[btn_Close_model, overlay].forEach((Element) =>
  Element.addEventListener("click", toggle_model)
);
