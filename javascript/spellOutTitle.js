const title = document.querySelector("#title")

let text = "Pokémon Text Game"
let i = 0;

function writeText() {
    if (i <= text.length) {
        title.textContent = text.slice(0, i);
        i++;
    } else { clearInterval(interval) }
}

const interval = setInterval(writeText, 55);