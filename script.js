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

    alert("❤️ To Be Continued... ❤️");

});