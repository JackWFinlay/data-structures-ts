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

    public insert(index: number, value: T) {

        if (index < 0 || index > this._count) {
            throw new Error("Index out of bounds.");
        }

        const newNode: ListNode<T> = new ListNode<T>(value);

        if (this._count === 0 && index === 0) {
            this._head = newNode;
            this._tail = this._head;
            this._count++;
        } else if (index === 0) {
            this._head.previous = newNode;
            newNode.next = this._head;
            this._head = newNode;
        } else {
            let current: ListNode<T> = this._head;

            for (let j = 0; j < index; j++) {
                current = current.next;
            }

            if (current === null) {
                this._tail.next = newNode;
                newNode.previous = this._tail;
                this._tail = newNode;
            }
        }

    }

    public addFirst(value: T) {
        this.insert(0, value);
    }

    public asArray(): T[] {
        const array: T[] = [];
        const enumerator: ListEnumerator<T> = this.getEnumerator();
        while ( enumerator.moveNext().value !== null) {
            array.push(enumerator.current().value);
        }

        return array;
    }

    public get(index: number): ListNode<T> {
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
        return new ListEnumerator(this);
    }


}
