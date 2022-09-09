const start = document.querySelector("#start-btn")
const startBtn = document.getElementById("start-btn")

const inputArea = document.getElementById("poke-input")

function onClickStart() {
    startBtn.style.transition = ".5s"
    startBtn.style.opacity = "0"
    startBtn.style.visibility = "hidden"
    inputArea.style.opacity = "100"
    inputArea.style.transition = "1s"
    inputArea.style.visibility = "visible"

}