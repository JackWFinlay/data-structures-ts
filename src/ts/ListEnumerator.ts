import { IEnumerator } from "./IEnumerator";
import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";

export class ListEnumerator<T> implements IEnumerator {

    constructor(private linkedList: LinkedList<T>) {

    }
    public current(): ListNode<T> {
        throw new Error("Not yet implemented.");
    }

    public moveNext(): ListNode<T> {
        throw new Error("Not yet implemented.");
    }

    public reset(): void {
        throw new Error("Not yet implemented.");
    }

}
