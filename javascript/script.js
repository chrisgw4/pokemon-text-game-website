const start = document.querySelector("#start-btn")
const startBtn = document.getElementById("start-btn")

const inputArea = document.getElementById("poke-input")
const outputArea = document.getElementById("output-box")

let intervalMoveStartBtn

function onClickStart() {
    // startBtn.style.transition = ".5s"
    //startBtn.style.opacity = "0"
    // startBtn.style.visibility = "hidden"
    if (startBtn.clientWidth >= 150 && startBtn.offsetTop >= 200) {
        return;
    }

    outputArea.style.visibility = "visible"
    outputArea.style.opacity = "100"
    outputArea.style.transition = "4s"

    startBtn.style.animation = "makeCircle .25s ease-in forwards"
    startBtn.textContent = ""
    intervalMoveStartBtn = setInterval(moveStartBtn, 100)

}
let t = new OutputText("What is your Name?", 60)

function moveStartBtn() {
    //console.log(startBtn.clientWidth)

    if (startBtn.clientWidth == 26) {
        startBtn.style.transition = ".4s"
        startBtn.style.width = "30px"
        startBtn.style.height = "34px"

        startBtn.style.borderRadius = "100px"
        startBtn.style.background = "#bec2bf"

        startBtn.style.animation = "moveAnim 1s ease-in forwards"
        t.startInterval()


    }
    if (startBtn.offsetTop >= 200 && startBtn.offsetTop < 300) {

        startBtn.style.transition = ".2s"
        startBtn.style.height = "20px"
        startBtn.style.width = "20px"
    }
    if (startBtn.clientWidth == 16) {
        startBtn.style.height = "30px"
        startBtn.style.width = "200px"
        clearInterval(intervalMoveStartBtn)


        inputArea.style.opacity = "100"
        inputArea.style.transition = "1s"
        inputArea.style.visibility = "visible"
        inputArea.style.width = "200px"
        inputArea.style.height = "30px"

    }
    // if (startBtn.offsetTop == 300) {
    //     startBtn.style.top = 300
    //     startBtn.style.animation = "pulsate 1s ease-in-out infinite alternate"
    // }
}