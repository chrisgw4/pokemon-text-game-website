const start = document.querySelector("#start-btn")
const startBtn = document.getElementById("start-btn")

const inputArea = document.getElementById("poke-input")
const outputArea = document.getElementById("output-box")

function onClickStart() {
    startBtn.style.transition = ".5s"
    startBtn.style.opacity = "0"
    startBtn.style.visibility = "hidden"
    inputArea.style.opacity = "100"
    inputArea.style.transition = "1s"
    inputArea.style.visibility = "visible"
    outputArea.style.visibility = "visible"
    outputArea.style.opacity = "100"
    outputArea.style.transition = "4s"
}

let t = new OutputText("DEEZ")

t.startInterval()