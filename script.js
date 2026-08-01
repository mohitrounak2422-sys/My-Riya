const button = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

const message = `You are the most beautiful part of my life.

Every smile of yours makes my world brighter.

Thank you for coming into my life.

No matter what happens...

I will always love you.

Forever & Always ❤️`;

button.addEventListener("click", () => {

    button.style.display = "none";

    envelope.style.display = "block";

    setTimeout(() => {

        envelope.classList.add("open");

        typeLetter();

    }, 400);

});

let i = 0;

function typeLetter() {

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter, 40);

    } else {

        nextBtn.style.display = "inline-block";

    }

}

nextBtn.addEventListener("click", () => {

document.querySelector(".container").innerHTML = `

<h1>❤️ Our Story ❤️</h1>

<p style="font-size:22px;line-height:1.8;max-width:700px;margin:auto;">

Every day with you feels like the most beautiful dream. ❤️

<br><br>

Your smile is my peace.

<br><br>

Your happiness is my happiness.

<br><br>

No matter what happens,

I will always stand beside you.

<br><br>

❤️ I Love You Forever ❤️

</p>

<br><br>

<button onclick="location.reload()">

Back ❤️

</button>

`;

});