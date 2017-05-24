import { ListNode } from './ListNode';
export interface IEnumerable {
    enumerate<T>(): ListNode<T>[];
    get<T>(index: number): ListNode<T>;
    add<T>(index: number,node: ListNode<T>);
    push<T>(node: ListNode<T>): number;
    pop<T>(): ListNode<T>;
    peek<T>(): ListNode<T>;
}
