module.exports = class ControllerBase {
    constructor(type, func) {
        this._type = type;
        this._func = func;
    }
    get type() {
        return this._type;
    }
    get func() {
        return this._func;
    }
}