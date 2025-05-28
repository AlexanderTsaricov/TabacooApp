class Teksture {
    #texture = "";
    #type = "";

    /**
     * 
     * @param {string} texture name of texture
     * @param {string} type type texture
     */
    constructor (texture, type) {
        if (typeof(texture) !== "string" && typeof(type) !== "string") {
            throw new Error("Invalid arument. Need by are string");
        }
        this.#texture = texture;
        this.#type = type;
    }

    /**
     * 
     * @returns {Array} return array with [<texture name>, <texture type>]
     */
    get() {
        return [this.#texture, this.#type];
    }

    getTeksture() {
        return this.#texture;
    }

    getType() {
        return this.#type;
    }
}

export default Teksture;