const button = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");

button.addEventListener("click", () => {

    envelope.style.display = "block";

    setTimeout(() => {
        envelope.classList.add("open");
    },300);

    button.style.display = "none";

});