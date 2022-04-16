"use strict";

const thankU = document.querySelector(".thank-you");
const btnOpenNo = document.querySelectorAll(".no");
const submit = document.querySelector(".btn");
// const no = document.querySelectorAll('.no');

// const noll = [...no];
// console.log(noll);

// const noAll = function () {
//     document.querySelector('.no').style.backgroundColor = '#ccd9ed';
// }

const openThankU = function () {
  thankU.classList.remove("hidden");
};

// const openHid = function () {
//     no.classList.remove("hidden");
// }
//
// for (const nos of noll) {
//     nos.addEventListener('click', ++noAll);
// }

for (const btnOpen of btnOpenNo) {
  btnOpen.addEventListener("click", function () {
    // no.addEventListener('click', openHid);

    document.querySelector(".select").textContent = `You selected ${
      1 > 5 ? 1 : 4
    } out of 5 `;
    submit.addEventListener("click", openThankU);
  });
}
