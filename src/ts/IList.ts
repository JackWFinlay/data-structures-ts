import { ListNode } from "./ListNode";
export interface IList {
    add<T>(index: number, node: ListNode<T>);
    asArray<T>(): Array<ListNode<T>>;
    get<T>(index: number): ListNode<T>;
    peek<T>(): ListNode<T>;
    push<T>(node: ListNode<T>): number;
    pop<T>(): ListNode<T>;

}
