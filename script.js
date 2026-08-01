const button = document.getElementById("openBtn");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    if (music) {
        music.play().catch(() => {});
    }

    document.querySelector(".container").innerHTML = `
        <h1>💌 Dear Riya</h1>

        <p style="font-size:20px;line-height:1.8;max-width:350px;margin:20px auto;">
        You are the most beautiful chapter of my life. ❤️<br><br>

        Every smile of yours makes my day brighter.<br><br>

        Thank you for coming into my life.<br><br>

        I Love You Forever. ❤️
        </p>

        <button onclick="location.reload()">
            Back ❤️
        </button>
    `;

});