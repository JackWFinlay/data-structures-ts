export class AbstractNode<T> {

    constructor(private nodeValue: T = null) {}

    public get value(): T {
        return this.nodeValue;
    }

    public set value(value: T){
        this.nodeValue = value;
    }
}
