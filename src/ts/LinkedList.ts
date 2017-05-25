import { IEnumerable } from "./IEnumerable";
import { IList } from "./IList";
import { ListEnumerator } from "./ListEnumerator";
import { ListNode } from "./ListNode";
export class LinkedList<T> implements IEnumerable, IList {

    private _count: number = 0;

    private _tail: ListNode<T> = null;

    constructor(private _head: ListNode<T> = null) {
        if (_head) {
            this._tail = _head;
            this._count++;
        }
    }

    public add<T>(index: number, node: ListNode<T>) {
        if (this._count === 0 && index !== 0) {
            throw new Error("Index does not exist.");
        }
    }

    public asArray<T>(): Array<ListNode<T>> {
        throw new Error("Not yet implemented.");
    }

    public get<T>(index: number): ListNode<T> {
        throw new Error("Not yet implemented.");
    }

    public get first(): ListNode<T> {
        return this._head;
    }

    public get last(): ListNode<T> {
        return this._tail;
    }

    public get count(): number {
        return this._count;
    }

    public getEnumerator(): ListEnumerator<T> {
        throw new Error("Not yet implemented.");
    }

    public peek<T>(): ListNode<T> {
        throw new Error("Not yet implemented.");
    }

    public push<T>(node: ListNode<T>): number {
        throw new Error("Not yet implemented.");
    }

    public pop<T>(): ListNode<T> {
        throw new Error("Not yet implemented.");
    }
}
