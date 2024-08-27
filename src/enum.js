import overload from "@jyostudio/overload";

export default class Enum {
    #value;

    #description = "";

    get description() {
        return this.#description;
    }

    get valNumber() {
        return Number(this.#value);
    }

    get valString() {
        return "" + (this.#value || "");
    }

    get valBoolean() {
        return !!this.#value;
    }

    get valObject() {
        return Object(this.#value);
    }

    static #_constructor = function (...params) {
        Enum.#_constructor = overload()
            .add([],
                /**
                 * @this {Enum}
                 */
                function () {
                    this.#value = Symbol();
                })
            .add([Enum],
                /**
                 * @this {Enum}
                 * @param {Enum} value - 枚举对象
                 */
                function (value) {
                    this.#value = value.#value;
                })
            .add(["*"],
                /**
                 * @this {Enum}
                 * @param {*} value - 枚举值
                 */
                function (value) {
                    this.#value = value;
                })
            .add([Enum, String],
                /**
                 * @this {Enum}
                 * @param {Enum} value - 枚举对象
                 * @param {String} description - 描述
                 */
                function (value, description) {
                    this.#value = value.#value;
                    this.#description = description;
                })
            .add(["*", String],
                /**
                 * @this {Enum}
                 * @param {*} value - 枚举值
                 * @param {String} description - 描述
                 */
                function (value, description) {
                    this.#value = value;
                    this.#description = description;
                });

        return Enum.#_constructor.apply(this, params);
    };

    constructor(...params) {
        return Enum.#_constructor.apply(this, params);
    }

    [Symbol.iterator] = function* () {
        yield this.#value;
    };

    static getAll(...params) {
        Enum.getAll = overload()
            .add([], function () {
                const list = [];
                const allNames = Object.getOwnPropertyNames(this);

                for (let i = 0; i < allNames.length; i++) {
                    if (allNames[i] === "prototype") continue;

                    const p = this[allNames[i]];
                    if (typeof p === "object" && p instanceof Enum) list.push(p);
                }

                return list;
            });

        return Enum.getAll.apply(this, params);
    }

    static getByValue(...params) {
        /**
         * @this {typeof Enum}
         * @param {*} value - 枚举值
         * @param {String} typeConvter - 类型转换器
         * @returns {Enum | null}
         */
        const getFn = (value, typeConvter) => {
            const allEnum = this.getAll();
            for (let i = allEnum.length; i--;) {
                if (allEnum[i][typeConvter] === value) return allEnum[i];
            }

            return null;
        };

        Enum.getByValue = overload()
            .add([Number], function (value) {
                return getFn(value, "valNumber");
            })
            .add([String], function (value) {
                return getFn(value, "valString");
            })
            .add([Boolean], function (value) {
                return getFn(value, "valBoolean");
            })
            .add([Enum], function (value) {
                return this.getByValue(value.valNumber);
            })
            .add([Object], function (value) {
                return getFn(value, "valObject");
            });

        return Enum.getByValue.apply(this, params);
    }

    static getByDescription(...params) {
        Enum.getByDescription = overload()
            .add([String],
                /**
                 * @this {typeof Enum}
                 * @param {String} value - 描述
                 * @returns {Enum | null}
                 */
                function (value) {
                    let allEnum = this.getAll();
                    for (let i = allEnum.length; i--;) {
                        if (allEnum[i].description === value) return allEnum[i];
                    }

                    return null;
                });

        return Enum.getByDescription.apply(this, params);
    }

    static set(...params) {
        Enum.set = overload()
            .add([Object],
                /**
                 * @this {typeof Enum}
                 * @param {Object} map - 枚举表
                 */
                function (map) {
                    for (const key in map) {
                        const value = new this(map[key], key);
                        Reflect.defineProperty(this, key, {
                            writable: false,
                            enumerable: true,
                            configurable: false,
                            value
                        });
                    }

                    Object.freeze(this);
                });

        return Enum.set.apply(this, params);
    }

    valueOf() {
        return this.#value;
    }
}
