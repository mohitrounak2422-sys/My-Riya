const hearts = document.querySelector(".floating-hearts");

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (20 + Math.random()*35) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);


document.getElementById("openBtn").onclick=function(){

    alert("Welcome My Princess ❤️");

}