const button = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");

const message = `Dear Riya ❤️

You are the most beautiful part of my life.

Every smile of yours makes my world brighter.

Thank you for coming into my life.

No matter what happens...

I will always stand beside you.

Forever & Always ❤️`;

let i = 0;

button.addEventListener("click", () => {

    button.style.display = "none";

    if (music) {
        music.play().catch(() => {});
    }

    envelope.style.display = "block";

    setTimeout(() => {
        envelope.classList.add("open");
        typeLetter();
    }, 500);

});

function typeLetter(){

    if(i < message.length){

        typing.textContent += message.charAt(i);

        i++;

        setTimeout(typeLetter,40);

    }else{

        nextBtn.style.display="inline-block";

    }

}

nextBtn.addEventListener("click", showStory);

function showStory(){

document.querySelector(".container").innerHTML=`

<h1>❤️ Our Story ❤️</h1>

<p style="font-size:22px;line-height:2;max-width:700px;margin:auto;">

✨ Every moment with you has become a beautiful memory.

<br><br>

🌸 Your smile gives me peace.

<br><br>

💖 Your love gives me strength.

<br><br>

🌍 No matter where life takes us,
I promise to stand beside you.

<br><br>

🤍 You are my favorite person,
today and forever.

</p>

<br>

<button id="storyBtn">

Continue ❤️

</button>

`;

document.getElementById("storyBtn").addEventListener("click",showFrames);

}
function showFrames() {

    let frame = 0;

    const frames = [

        {
            title: "💖 The Day You Came 💖",
            text: "The day you came into my life, everything changed forever. Every moment since then has become a beautiful memory."
        },

        {
            title: "🌸 Your Smile 🌸",
            text: "Your smile is my favorite place. It has the power to make every bad day feel beautiful."
        },

        {
            title: "🤍 My Forever 🤍",
            text: "No matter what life brings, I promise I will always stand beside you, support you and love you forever."
        },

        {
            title: "🌹 My Promise 🌹",
            text: "If I could choose again and again, I would still choose you every single time. Forever is where I want to be with you."
        }

    ];

    showFrame();

    function showFrame() {

        document.querySelector(".container").innerHTML = `

<div class="story-card">

<h2>${frames[frame].title}</h2>

<p>${frames[frame].text}</p>

<br>

<button id="frameBtn" class="story-btn">

${frame === frames.length - 1 ? "Final Surprise ❤️" : "Next ❤️"}

</button>

</div>

`;

        document.getElementById("frameBtn").onclick = () => {

            frame++;

            if (frame < frames.length) {

                showFrame();

            } else {

                showFinal();

            }

        };

    }

}
function showFinal() {

document.querySelector(".container").innerHTML = `

<div class="story-card">

<h1>💖 Forever Together 💖</h1>

<p style="font-size:24px;line-height:2;">

🌹 You are my today...

<br><br>

🌹 You are my tomorrow...

<br><br>

🌹 You are my forever...

<br><br>

❤️ I Love You So Much Riya ❤️

<br><br>

✨ Thank you for making my life beautiful.

</p>

<br>

<button onclick="location.reload()" class="story-btn">

🔄 Start Again ❤️

</button>

</div>

`;

}
const hearts = document.getElementById("hearts");

if (hearts) {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = ["❤️","💖","💕","💗","💓"][Math.floor(Math.random()*5)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        heart.style.fontSize = (18 + Math.random() * 20) + "px";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 350);

}
function heartBlast(){

for(let i=0;i<50;i++){

const heart=document.createElement("div");

heart.className="blast-heart";

heart.innerHTML="❤️";

heart.style.left="50%";
heart.style.top="50%";

heart.style.setProperty("--x",
(Math.random()*800-400)+"px");

heart.style.setProperty("--y",
(Math.random()*800-400)+"px");

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1500);

}

}

