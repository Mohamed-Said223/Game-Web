let loading = document.querySelector("#loader-wrapper");
setTimeout(function () {
loading.style.opacity = 0;
}, 3000);
setTimeout(function () {
loading.style.display = "none";
}, 3200);

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
//gallery page
let cards=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .card");
let card1=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .ORIGIN");
let card2=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .PLAYSTATION4");
let card3=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .STEAM");
let card4=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .UPLAY");
let card5=document.querySelectorAll(".gallery_sec_1 .result_gellery_page .XBOX");
let li=document.querySelectorAll(".gallery_sec_1 ul li");
let li1=document.querySelector(".gallery_sec_1 ul .li1");
let li2=document.querySelector(".gallery_sec_1 ul .li2");
let li3=document.querySelector(".gallery_sec_1 ul .li3");
let li4=document.querySelector(".gallery_sec_1 ul .li4");
let li5=document.querySelector(".gallery_sec_1 ul .li5");
let li6=document.querySelector(".gallery_sec_1 ul .li6");
function lis(){
li.forEach((li)=> {
li.style.color="#fff"
});
}
li1.onclick = () => {
cards.forEach(element => {
element.style.display="inline-block";
});
lis();
li1.style.color="#3dd0d8";
}
li2.onclick = () => {
cards.forEach(element => {
element.style.display="none";
});
card1.forEach(element => {
element.style.display="inline-block";
});
lis();
li2.style.color="#3dd0d8";
}
li3.onclick = () => {
cards.forEach(element => {
element.style.display="none";
});
card2.forEach(element => {
element.style.display="inline-block";
});
lis();
li3.style.color="#3dd0d8";
}
li4.onclick = () => {
cards.forEach(element => {
element.style.display="none";
});
card3.forEach(element => {
element.style.display="inline-block";
});
lis();
li4.style.color="#3dd0d8";
}
li5.onclick = () => {
cards.forEach(element => {
element.style.display="none";
});
card4.forEach(element => {
element.style.display="inline-block";
});
lis();
li5.style.color="#3dd0d8";
}
li6.onclick = () => {
cards.forEach(element => {
element.style.display="none";
});
card5.forEach(element => {
element.style.display="inline-block";
});
lis();
li6.style.color="#3dd0d8";
}