import { AbstractNode } from "./AbstractNode";
export class ListNode<T> extends AbstractNode<T> {

    private previousNode: ListNode<T> = null;
    private nextNode: ListNode<T> = null;
    constructor() { super(); }

    get previous(): ListNode<T> {
        return this.previousNode;
    }

    set previous(previous: ListNode<T>) {
        this.previousNode = previous;
    }

    get next(): ListNode<T> {
        return this.nextNode;
    }

    set next(node: ListNode<T>){
        this.nextNode = node;
    }
}
