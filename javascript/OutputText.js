class OutputText {

    str = "";

    index = 0;

    interval = null

    line = document.getElementById("line-two")

    delay = 0;

    constructor(string, delay) {
        this.str = string
        this.line.textContent = ""
        this.delay = delay;
    }

    writeTexts() {

        if (this.index <= this.str.length) {
            //console.log(this.index)
            this.line.textContent = this.str.slice(0, this.index);
            //if (this.line.style.opacity == 100)
            this.index++;
        } else { clearInterval(this.interval) }
    }

    startInterval() {
        if (this.interval == null)
            this.interval = setInterval(this.writeTexts.bind(this), this.delay);
    }

    get str() { return this.str }

    set str(string) {
        this.str = string
    }

    resetInterval() {
        this.index = 0;
        this.interval = null;
    }




}