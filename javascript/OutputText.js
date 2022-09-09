class OutputText {

    str = "";

    index = 0;

    interval = null

    textBox = document.getElementById("#line-two")

    constructor(string) {
        this.str = string
    }

    writeText() {
        console.log(this.str)
        if (this.index <= this.str.length) {
            this.textBox.textContent = str.slice(0, this.index);
            this.index++;
        } else { clearInterval(interval) }
    }

    startInterval() {
        interval = setInterval(writeText, 45);
    }

    getStr() {
        return this.str;
    }
}