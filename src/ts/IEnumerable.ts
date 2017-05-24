import { ListNode } from './ListNode';
export interface IEnumerable {
    add<T>(index: number,node: ListNode<T>);
    enumerate<T>(): ListNode<T>[];
    get<T>(index: number): ListNode<T>;
    peek<T>(): ListNode<T>;
    push<T>(node: ListNode<T>): number;
    pop<T>(): ListNode<T>;

}
