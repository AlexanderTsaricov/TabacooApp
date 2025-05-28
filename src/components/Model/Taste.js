/**
 * Have only one parameter - tastename
 * For create need add taste name in arguments
 * @method get return tastename
 */
class Taste {
    #tastename = "";

    /**
     * 
     * @param {string} tasteName name of taste
     */
    constructor(tasteName) {
        if (typeof(tasteName) !== "string") {
            throw new Error("Invalid arument. Need by are string");
        }
        this.#tastename = tasteName;
    }

    get() {
        return this.#tastename;
    }
}

export default Taste;