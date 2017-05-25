import { ListNode } from "./ListNode";
export interface IList {
    insert<T>(index: number, value: T);
    asArray<T>(): Array<ListNode<T>>;
    get<T>(index: number): ListNode<T>;

}
