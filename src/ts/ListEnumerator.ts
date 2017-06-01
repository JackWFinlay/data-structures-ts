import { IEnumerator } from "./IEnumerator";
import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";

export class ListEnumerator<T> implements IEnumerator<T> {

    private currentNode: ListNode<T> = null;

    constructor(private _linkedList: LinkedList<T>) {
        this.currentNode = _linkedList.first;
    }
    public current(): ListNode<T> {
        return this.currentNode;
    }

    public moveNext(): ListNode<T> {
        return this.currentNode.next;
    }

    public reset(): void {
        this.currentNode = this._linkedList.first;
    }

}
