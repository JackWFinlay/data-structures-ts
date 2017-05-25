import { AbstractNode } from "./AbstractNode";
export class ListNode<T> extends AbstractNode<T> {

    private _previous: ListNode<T> = null;
    private _next: ListNode<T> = null;
    constructor(value: T) {
        super(value);
    }

    get previous(): ListNode<T> {
        return this._previous;
    }

    set previous(previous: ListNode<T>) {
        this._previous = previous;
    }

    get next(): ListNode<T> {
        return this._next;
    }

    set next(node: ListNode<T>){
        this._next = node;
    }
}
