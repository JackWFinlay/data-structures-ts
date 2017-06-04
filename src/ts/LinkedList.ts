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

        if (this._count === 0 && index === 0) {
            this.addHead(value);

        } else if (index === 0) {
            this.addFirst(value);

        } else if (index === (this.count - 1)) {
            this.addLast(value);

        } else {
            let current: ListNode<T> = this._head;

            for (let j = 0; (j < index) && (current !== null); j++) {
                current = current.next;
            }

            const newNode: ListNode<T> = new ListNode<T>(value);
            current.previous.next = newNode;
            newNode.next = current;
            current.previous = newNode;

        }
        this._count++;
    }

    public addFirst(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value);
        this._head.previous = newNode;
        newNode.next = this._head;
        this._head = newNode;
    }

    public addLast(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value);
        this._tail.next = newNode;
        newNode.previous = this._tail;
        this._tail = newNode;
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
        let current = this._head;

        for (let i = 0; i <= index ; i++ ) {
            current = current.next;
        }

        return current;
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

    private addHead(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value);
        this._head = newNode;
        this._tail = this._head;
    }

}
