let sideBar = document.querySelector("#sideMenu");
let titles = document.getElementsByClassName("title");
let hamburgerBtn = document.querySelector("#hamburger-btn");

console.log(titles);

hamburgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");

  for (let i = 0; i < titles.length; i++) {
    titles[i].classList.toggle("shown");
    //  setTimeout(() => {
    //    // titles[i].style.display = "inline-block";
    //    titles[i].classList.toggle("shown");
    //    //  console.log("opening");
    //  }, 200);
  }
});

// sideMenu.addEventListener("mouseover", () => {
//   console.log("over");

//   for (let i = 0; i < titles.length; i++) {
//     setTimeout(() => {
//       // titles[i].style.display = "inline-block";
//       titles[i].classList.toggle("open");
//       console.log("opening");
//     }, 200);
//   }
// });

// sideMenu.addEventListener("mouseout", () => {
//   console.log("out");

//   for (let i = 0; i < titles.length; i++) {
//     //  titles[i].style.display = "none";
//     titles[i].classList.toggle("open");
//     console.log("closing");
//   }
// });
