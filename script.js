const button = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");

const message = `You are the most beautiful part of my life.

Every smile of yours makes my world brighter.

Thank you for coming into my life.

No matter what happens...

I will always stand beside you.

Forever & Always ❤️`;

button.addEventListener("click", () => {

    button.style.display = "none";

    if (music) {
        music.play().catch(() => {});
    }

    envelope.style.display = "block";

    setTimeout(() => {
        envelope.classList.add("open");
        typeLetter();
    }, 400);

});

let i = 0;

function typeLetter() {

    if (i < message.length) {

        typing.textContent += message.charAt(i);
        i++;

        setTimeout(typeLetter, 40);

    } else {

        nextBtn.style.display = "inline-block";

    }

}

nextBtn.addEventListener("click", () => {

document.querySelector(".container").innerHTML = `

<h1>❤️ Our Story ❤️</h1>

<p style="font-size:22px;line-height:2;max-width:700px;margin:auto;padding:20px;">

✨ Every moment with you has become a beautiful memory.

<br><br>

🌸 Your smile gives me peace.

<br><br>

💖 Your love gives me strength.

<br><br>

🌍 No matter where life takes us,
I promise to stand beside you.

<br><br>

🤝 Together we can face every challenge.

<br><br>

❤️ Thank you for being the most beautiful part of my life.

<br><br>

✨ I Love You Today...
Tomorrow...
Forever... ❤️

</p>

<br>

<button id="finalBtn">
Next ➜ ❤️
</button>

`;

document.getElementById("finalBtn").addEventListener("click", () => {

nextBtn.addEventListener("click", () => {

let frame = 0;

const frames = [

{
title:"❤️ The Day You Came ❤️",
text:"The day you came into my life, everything became brighter. You turned ordinary moments into the most beautiful memories."
},

{
title:"🌸 Your Smile 🌸",
text:"Your smile is my favorite place in this world. Whenever you smile, my heart feels complete."
},

{
title:"🤍 My Safe Place 🤍",
text:"No matter how difficult life becomes, your love always feels like home. You are my peace."
},

{
title:"💍 Forever Promise 💍",
text:"I don't promise a perfect life, but I promise that I will always stand beside you, respect you and love you forever."
}

];

function showFrame(){

document.querySelector(".container").innerHTML=`

<h1>${frames[frame].title}</h1>

<div class="frame">

<p>

${frames[frame].text}

</p>

<br>

<button id="nextFrame">

${frame==frames.length-1?"Final Surprise ❤️":"Next ➜"}

</button>

</div>

`;

document.getElementById("nextFrame").onclick=()=>{

frame++;

if(frame<frames.length){

showFrame();

}else{

showFinal();

}

};

}

function showFinal(){

document.querySelector(".container").innerHTML=`

<h1>❤️ I Love You Riya ❤️</h1>

<p style="font-size:26px;line-height:2;">

You are my today...

You are my tomorrow...

You are my forever...

❤️ Forever Together ❤️

</p>

<button onclick="location.reload()">

Start Again ❤️

</button>

`;

}

showFrame();

});