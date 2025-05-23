class Teksture {
    #teksture = "";
    #type = "";

    constructor (teksture, type) {
        if (typeof(teksture) !== "string" && typeof(type) !== "string") {
            throw new Error("Invalid arument. Need by are string");
        }
        this.#teksture = teksture;
        this.#type = type;
    }

    get() {
        return [this.#teksture, this.#type];
    }

    getTeksture() {
        return this.#teksture;
    }

    getType() {
        return this.#type;
    }
}

export default Teksture;