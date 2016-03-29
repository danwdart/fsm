export default class FSM {
    constructor(values, value) {
        let symValues = Symbol.for('values'),
            symValue = Symbol.for('value');

        if (!(values instanceof Array))
            throw new Error('values is not an array, it is a' + typeof values);

        for (let value of values) {
            if ('string' !== typeof value)
                throw new Error('values must all be strings');
        }

        this[symValues] = values;

        if (!this[symValues].includes(value))
            throw new Error('initial value must be valid');

        this[symValue] = value;
    }

    set value(value) {
        let symValues = Symbol.for('values'),
            symValue = Symbol.for('value');

        if ('string' !== typeof value)
            throw new Error('value is not a string');

        if (!this[symValues].includes(value))
            throw new Error('value is not a valid state');

        this[symValue] = value;
    }

    get validValues() {
        let symValues = Symbol.for('values');

        return this[symValues];
    }

    get value() {
        let symValue = Symbol.for('value');

        return this[symValue];
    }
};
