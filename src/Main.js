import ConsoleLog from "./ConsoleLog";

export default class Main {
    constructor() {
    }

    logSomeStuff() {
        let logger = new ConsoleLog();
        logger.log(this.sum(1, 2, 3, 4));
        logger.log(this.removeLetterFromText("This is a text", " "));
    }

    removeLetterFromText(text, letter) {
        let result = text.split(letter).join("");
        return result;
    }

    /**
     * @arguments numbers to be summed up
     */
    sum() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "number") {

                return NaN;
            }
            sum += arguments[i];
        }
        return sum;
    }
}