export class ListNode<T> {

    constructor(private nodeValue: T = null, private previousNode: ListNode<T> = null, private nextNode: ListNode<T> = null) {}

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

    get value(): T {
        return this.nodeValue;
    }
}
