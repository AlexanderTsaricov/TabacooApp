class Tabacoo {
    #name = "";
    #brand = "";

    constructor(name, brand) {
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
