const $ = document.querySelector.bind(document);
const slides = [
  {
    img: "./assets/sliders/chicago.jpg",
    heading: "Chicago",
    text_decription: " Thank you, Chicago - A night we won't forget.",
  },
  {
    img: "./assets/sliders/ny.jpg",
    heading: "New York",
    text_decription: " The atmosphere in New York is lorem ipsum.",
  },
  {
    img: "./assets/sliders/la.jpg",
    heading: "Los Angeles",
    text_decription: "We had the best time playing at Venice Beach!",
  },
];
var i = 0;
function handelSlider(i) {
  let htmls = document.querySelector("#slider .text_content");
  let heading = htmls.querySelector(".text_heading");
  let decription = htmls.querySelector(".text_decription");
  document.querySelector(
    "#slider"
  ).style.backgroundImage = `url(${slides[i].img})`;
  heading.innerHTML = slides[i].heading;
  decription.innerHTML = slides[i].text_decription;
}
function btnBuyTicket() {
  const btnTicket = document.querySelectorAll(".buy-ticket");
  btnTicket.forEach((element) => {
    element.onclick = () => {
      document.querySelector(".modal").style.display = "flex";
    };
  });
  document.querySelector(".modal-close").onclick = () => {
    document.querySelector(".modal").style.display = "none";
  };
  document.querySelector(".modal").onclick = () => {
    document.querySelector(".modal").style.display = "none";
  };
  document.querySelector(".modal-container").onclick = (event) => {
    event.stopPropagation();
  };
}
var flag = 0;
function btnMenuMobile() {
  var mobileBtn = document.querySelector(".mobile-menu-btn");
  var header = document.querySelector("#header");
  mobileBtn.onclick = () => {
    if (header.clientHeight === 46) {
      header.style.height = "auto";
    } else {
      header.style.height = null;
    }
  };
  var nav = document.querySelectorAll(" #nav li a");
  nav.forEach((element) => {
    element.onclick = (event) => {
      if (!element.nextElementSibling) {
        header.style.height = null;
      } else {
        event.preventDefault();
        header.style.height = "auto";
      }
    };
  });
}

setInterval(() => {
  if (i == slides.length) i = 0;
  handelSlider(i);
  i++;
}, 5000);
btnBuyTicket();
btnMenuMobile();
