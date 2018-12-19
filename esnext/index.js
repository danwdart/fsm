export default class FSM {
    #values = [];
    #value = ``;
    constructor(values, value) {
        if (!(values instanceof Array)) {
            throw new Error(`values is not an array, it is a` + typeof values);
        }

        let valid = false;
        for (let currentValue of values) {
            if (currentValue === value) {
                valid = true; // only one loop
            }
            if (`string` !== typeof value) {
                throw new Error(`values must all be strings`);
            }
        }

        if (!valid) {
            throw new Error(`initial value must be valid`);
        }

        this.#values = values;
        this.#value = value;
    }

    set value(value) {
        if (`string` !== typeof value) {
            throw new Error(`value is not a string`);
        }

        if (!this.#values.includes(value)) {
            throw new Error(`value is not a valid state`);
        }

        this.#value = value;
    }

    get validValues() {
        return this.#values;
    }

    get value() {
        return this.#value;
    }
}
