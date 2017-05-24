import { IEnumerable } from './IEnumerable';
import { ListNode } from './ListNode';
export class LinkedList<T> implements IEnumerable{
    constructor(){}
    
    add<T>(index: number,node: ListNode<T>) {
        throw "Not yet implemented."
    }

    enumerate<T>(): ListNode<T>[] {
        throw "Not yet implemented.";
    }

    get<T>(index: number): ListNode<T> {
        throw "Not yet implemented."
    }

    peek<T>(): ListNode<T> {
        throw "Not yet implemented."
    }

    push<T>(node: ListNode<T>): number {
        throw "Not yet implemented."
    }

    pop<T>(): ListNode<T> {
        throw "Not yet implemented."
    }
}
