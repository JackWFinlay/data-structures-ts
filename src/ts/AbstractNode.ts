export class AbstractNode<T> {

    constructor(private _value: T = null) {}

    public get value(): T {
        return this._value;
    }

    public set value(value: T){
        this._value = value;
    }
}
