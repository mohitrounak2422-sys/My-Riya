const photos = [
"images/IMG_3221.jpeg",
"images/IMG_3425.jpeg",
"images/IMG_3765.jpeg",
"images/IMG_3766.jpeg",
"images/IMG_3768.jpeg",
"images/IMG_3771.jpeg",
"images/IMG_3772.jpeg",
"images/IMG_3775.jpeg",
"images/IMG_3776.jpeg",
"images/IMG_3777.jpeg"
];
const hearts = document.querySelector(".floating-hearts");

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,300);