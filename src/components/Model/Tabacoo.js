class Tabacoo {
    #name = "";
    #brand = "";

    constructor(name, brand) {
        if (typeof(name) !== "string" && typeof(brand) !== "string") {
            throw new Error("Invalid arument. Need by are string");
        }
        this.name = name;
        this.brand = brand;
    }

    getName() {
        return this.#name;
    }

    getBrand() {
        return this.#brand;
    }
}

export default Tabacoo;