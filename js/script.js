let loading = document.querySelector("#loader-wrapper");
setTimeout(function () {
loading.style.opacity = 0;
}, 3000);
setTimeout(function () {
loading.style.display = "none";
}, 3200);
//ScrollReveal
ScrollReveal({
reset: true,
distance: "60px",
duration: 2500,
delay: 400,
});
ScrollReveal().reveal(".p1", { delay: 200, origin: "top" });
ScrollReveal().reveal(".p2", { delay: 700, origin: "left" });
ScrollReveal().reveal(".p3", { delay: 1200, origin: "right" });
ScrollReveal().reveal(".sec_1_btn", { delay: 1700, origin: "bottom" });
ScrollReveal().reveal(".sec_1 .icons i", {
delay: 2000,
origin: "right",
interval: 200,
});
ScrollReveal().reveal(".sec_2 .card", {
delay: 200,
origin: "top",
interval: 200,
});
ScrollReveal().reveal(".p_back ,.p_front", { delay: 100, origin: "top" });
ScrollReveal().reveal(".sec_8 .card1", { delay: 500, origin: "left" });
ScrollReveal().reveal(".sec_8 .card2", { delay: 500, origin: "top" });
ScrollReveal().reveal(".sec_8 .card3", { delay: 500, origin: "right" });
ScrollReveal().reveal(".sec_10 h2", { delay: 200, origin: "left" });
ScrollReveal().reveal(".sec_10 input , .sec_10 .ico i ", {
delay: 200,
origin: "right",
});

let go_to_up = document.querySelector(".go-to-up");
go_to_up.onclick = () => {
window.scrollTo({
top: 0,
behavior: "smooth",
});
};
let scroll_nav = document.querySelector("nav");
setInterval(function () {
if (window.scrollY > 99) {
scroll_nav.classList.add("scroll_active");
} else {
scroll_nav.classList.remove("scroll_active");
}
}, 100);
var swiper = new Swiper(".mySwiper", {
slidesPerView: 2,
spaceBetween: 150,
slidesPerGroup: 2,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
});
let sec2_card1 = document.querySelector(".sec_2 .card1");
let sec2_card2 = document.querySelector(".sec_2 .card2");
let sec2_card3 = document.querySelector(".sec_2 .card3");
let sec2_card4 = document.querySelector(".sec_2 .card4");
let sec3_address = document.querySelector(".sec_3 .address");
let sec3_span2 = document.querySelector(".sec_3 .span2");
let sec3_img = document.querySelector(".sec_3 img");
sec2_card1.onclick = () => {
sec2_card1.classList.add("active");
sec2_card2.classList.remove("active");
sec2_card3.classList.remove("active");
sec2_card4.classList.remove("active");
sec3_img.src = "Image/img (7).jpeg";
sec3_address.innerHTML = `FIFAL 2018`;
sec3_span2.innerHTML = `MAR 18,20 2018`;
};
sec2_card2.onclick = () => {
sec2_card2.classList.add("active");
sec2_card1.classList.remove("active");
sec2_card3.classList.remove("active");
sec2_card4.classList.remove("active");
sec3_img.src = "Image/img (3).jpeg";
sec3_address.innerHTML = `MIX COMBINTION`;
sec3_span2.innerHTML = `FAB 12 2018`;
};
sec2_card3.onclick = () => {
sec2_card3.classList.add("active");
sec2_card2.classList.remove("active");
sec2_card1.classList.remove("active");
sec2_card4.classList.remove("active");
sec3_img.src = "Image/img (2).jpeg";
sec3_address.innerHTML = `FORZE JACSON`;
sec3_span2.innerHTML = `JUN 1 2020`;
};
sec2_card4.onclick = () => {
sec2_card4.classList.add("active");
sec2_card2.classList.remove("active");
sec2_card3.classList.remove("active");
sec2_card1.classList.remove("active");
sec3_img.src = "Image/img (8).jpeg";
sec3_address.innerHTML = `NO MANS'S SKY`;
sec3_span2.innerHTML = `SEPT 15 2019`;
};
//==============================================
let sec6_li1 = document.querySelector(".sec_6 .li1");
let sec6_li2 = document.querySelector(".sec_6 .li2");
let sec6_li3 = document.querySelector(".sec_6 .li3");
let sec6_li4 = document.querySelector(".sec_6 .li4");
let sec6_li5 = document.querySelector(".sec_6 .li5");
let sec6_li6 = document.querySelector(".sec_6 .li6");
let sec6_div1 = document.querySelector(".sec_6 .div1");
let sec6_div2 = document.querySelector(".sec_6 .div2");
let sec6_div3 = document.querySelector(".sec_6 .div3");
let sec6_div4 = document.querySelector(".sec_6 .div4");
sec6_li1.onclick = () => {
sec6_li1.classList.add("li-active");
sec6_li2.classList.remove("li-active");
sec6_li3.classList.remove("li-active");
sec6_li4.classList.remove("li-active");
sec6_li5.classList.remove("li-active");
sec6_li6.classList.remove("li-active");
sec6_div1.style.display = "block";
sec6_div2.style.display = "block";
sec6_div3.style.display = "block";
sec6_div4.style.display = "block";
sec6_div1.style.gridArea = "1 / 1 / 2 / 2";
sec6_div2.style.gridArea = "1 / 2 / 2 / 3";
sec6_div3.style.gridArea = "2 / 1 / 3 / 3";
sec6_div4.style.gridArea = "1 / 3 / 3 / 4";
};
sec6_li2.onclick = () => {
sec6_li2.classList.add("li-active");
sec6_li1.classList.remove("li-active");
sec6_li3.classList.remove("li-active");
sec6_li4.classList.remove("li-active");
sec6_li5.classList.remove("li-active");
sec6_li6.classList.remove("li-active");
sec6_div1.style.display = "none";
sec6_div2.style.display = "block";
sec6_div3.style.display = "none";
sec6_div4.style.display = "block";
sec6_div2.style.gridArea = "1 / 2 / 2 / 3";
sec6_div4.style.gridArea = "1 / 2 / 3 / 1";
};
sec6_li3.onclick = () => {
sec6_li3.classList.add("li-active");
sec6_li2.classList.remove("li-active");
sec6_li1.classList.remove("li-active");
sec6_li4.classList.remove("li-active");
sec6_li5.classList.remove("li-active");
sec6_li6.classList.remove("li-active");
sec6_div1.style.display = "block";
sec6_div2.style.display = "none";
sec6_div3.style.display = "none";
sec6_div4.style.display = "none";
sec6_div1.style.gridArea = "1 / 1 / 2 / 2";
};
sec6_li4.onclick = () => {
sec6_li4.classList.add("li-active");
sec6_li2.classList.remove("li-active");
sec6_li3.classList.remove("li-active");
sec6_li1.classList.remove("li-active");
sec6_li5.classList.remove("li-active");
sec6_li6.classList.remove("li-active");
sec6_div1.style.display = "none";
sec6_div2.style.display = "block";
sec6_div3.style.display = "none";
sec6_div4.style.display = "none";
sec6_div2.style.gridArea = "1 / 1 / 2 / 2";
};
sec6_li5.onclick = () => {
sec6_li5.classList.add("li-active");
sec6_li2.classList.remove("li-active");
sec6_li3.classList.remove("li-active");
sec6_li4.classList.remove("li-active");
sec6_li1.classList.remove("li-active");
sec6_li6.classList.remove("li-active");
sec6_div1.style.display = "none";
sec6_div2.style.display = "none";
sec6_div3.style.display = "block";
sec6_div4.style.display = "none";
sec6_div3.style.gridArea = "1 / 1 / 1 / 3";
};
sec6_li6.onclick = () => {
sec6_li6.classList.add("li-active");
sec6_li2.classList.remove("li-active");
sec6_li3.classList.remove("li-active");
sec6_li4.classList.remove("li-active");
sec6_li5.classList.remove("li-active");
sec6_li1.classList.remove("li-active");
sec6_div1.style.display = "none";
sec6_div2.style.display = "none";
sec6_div3.style.display = "none";
sec6_div4.style.display = "block";
sec6_div4.style.gridArea = "1 / 2 / 3 / 1";
};

//==============================================
let li1 = document.querySelector(".sec_7 .li1");
let li2 = document.querySelector(".sec_7 .li2");
let li3 = document.querySelector(".sec_7 .li3");
let result_sec7 = document.querySelector(".sec_7 .result-sec7");

li1.onclick = () => {
li1.classList.add("active");
li2.classList.remove("active");
li3.classList.remove("active");
result_sec7.innerHTML = `<video autoplay loop controls>
  <source src="Image/video.mp4" type="video/mp4">
  </source>
</video>
<div class="contant">
  <h2>CREATE YOUR OWN CHANNEL AND START TO STREAM GAMES NOW</h2><br><br>
  <p>Drumstick meatloaf capicola short ribs, pork chop cupim kielbasa jerky porchetta pancetta chicken pastrami turkey
    tenderloin sausage. Pig buffalo alcatra meatball. T-bone hamburger bresaola kevin shank porchetta ground. Round beef
    tail tri-tip. Short loin pork strip steak venison.</p>
  <button class="btn" onclick="error_404()">GET START NOW</button>
  <hr color="#c2d4f8" size="0.1"><br>
  <h2>9 136 STREAMS FROM MOST RECENT GAMES</h2>
  <p>267 347 watching now</p>
</div> `;
};
li2.onclick = () => {
li2.classList.add("active");
li1.classList.remove("active");
li3.classList.remove("active");
result_sec7.innerHTML = ` <img src="Image/gamer (5).jpeg">
<div class="contant contant1">
  <img src="Image/img (8).jpeg">
  <h2>SHANKLE RIBEYE BACON<p>207 347 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (3).jpeg">
  <h2>DONER BRESAOLA PORK KIELBASA<p>360 926 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (2).jpeg">
  <h2>KIELBASA FATBACK ALCATR<p>167 159 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (7).jpeg">
  <h2>BACON TENDERLOIN DRUMSTICK MEATBALL<p>569 813 participants</p>
  </h2>
  <button class="btn2" onclick="contact()">CONTACT US NOW</button>
</div>`;
};
li3.onclick = () => {
li3.classList.add("active");
li1.classList.remove("active");
li2.classList.remove("active");
result_sec7.innerHTML = ` <img src="Image/gamer (6).jpeg">
<div class="contant contant1">
  <img src="Image/img (7).jpeg">
  <h2>SHANKLE RIBEYE BACON<p>207 347 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (8).jpeg">
  <h2>DONER BRESAOLA PORK KIELBASA<p>360 926 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (3).jpeg">
  <h2>KIELBASA FATBACK ALCATR<p>167 159 participants</p>
  </h2>
  <hr color="#c2d4f8" size="0.1">
  <img src="Image/img (2).jpeg">
  <h2>BACON TENDERLOIN DRUMSTICK MEATBALL<p>569 813 participants</p>
  </h2>
  <button class="btn2" onclick="contact()">CONTACT US NOW</button>
</div>`;
};
function error_404(){
  window.location.href="404page.html";
}
function contact(){
  window.location.href="Contact.html";
}
function About(){
  window.location.href="ABOUT.html";
}