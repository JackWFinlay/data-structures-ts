import { IEnumerable } from "./IEnumerable";
import { ListNode } from "./ListNode";
export class LinkedList<T> implements IEnumerable {

    private size: number = 0;

    private tail: ListNode<T> = null;

    constructor(private head: ListNode<T> = null) {
        if (head) {
            this.tail = head;
            this.size++;
        }
    }

    public add<T>(index: number, node: ListNode<T>) {
        if (this.size === 0 && index !== 0) {
            throw new Error("Index does not exist.");
        }
    }

    public enumerate<T>(): Array<ListNode<T>> {
        throw new Error("Not yet implemented.");
    }

    public get<T>(index: number): ListNode<T> {
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
