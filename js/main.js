"use strict";

// ========== Start Global ==========
let sideCurent;
// ========== OWl
$(function () {
   $(".wraper-slider").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      margin: 0,
   });
});

$(".wraper-slider2").owlCarousel({
   loop: true,
   margin: 20,
   responsiveClass: true,
   stagePadding: 10,
   autoplay: true,

   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      900: {
         items: 3,
      },
      1100: {
         items: 4,
      },
   },
});

const sideArea = document.querySelectorAll(".sideArea");
const aside = document.querySelectorAll("aside");
const closebtn = document.querySelectorAll(".close");
const menuIcons = document.querySelectorAll("#navPhone li");

// ========== End Global ==========

// ========== Start Events ==========

// Show Aside
for (let i = 0; i < menuIcons.length; i++) {
   menuIcons[i].addEventListener("click", () => {
      showOrHideAside(i);
   });
}

// Close Aside
for (let i = 0; i < closebtn.length; i++) {
   closebtn[i].addEventListener("click", () => {
      close(i);
   });
}

document.addEventListener("keydown", function (e) {
   if (sideCurent != undefined) {
      e.key !== "Escape" || close(sideCurent);
   }
});

// grid
document.getElementById("grid")?.addEventListener("click", function () {
   document.querySelectorAll(".right article").forEach((art) => {
      // art.classList.remove("md:flex-row");
      // art.classList.replace("items-center", "items-start");
      // art.querySelector(".btn-cat").classList.remove("md:flex-row");
   });
   document.getElementById("view").classList.add("md:grid-cols-2", "g");
});

// list
document.getElementById("list")?.addEventListener("click", function () {
   // document.querySelectorAll(".right article").forEach((art) => {
   //    art.classList.add("md:flex-row");
   //    art.classList.replace("items-start", "items-center");
   //    art.querySelector(".btn-cat").classList.remove("md:flex-col");
   // });
   document.getElementById("view").classList.remove("md:grid-cols-2", "g");
});

// ========== End Events ==========

// ========== Start Functions  ==========

// Show Aside
function showOrHideAside(sideNum) {
   sideCurent = sideNum;
   if (sideArea[sideNum].classList.contains("-left-full")) {
      sideArea[sideNum].classList.replace("-left-full", "left-0");
   } else {
      sideArea[sideNum].classList.replace("-top-full", "top-0");
   }

   aside[sideNum].classList.remove("before:invisible");
}

// Close Aside
function close(sideNum) {
   if (sideArea[sideNum].classList.contains("left-0")) {
      sideArea[sideNum].classList.replace("left-0", "-left-full");
   } else {
      sideArea[sideNum].classList.replace("top-0", "-top-full");
   }
   aside[sideNum].classList.add("before:invisible");
}
// ========== End  Functions ==========
