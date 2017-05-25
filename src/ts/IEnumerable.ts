import { IEnumerator } from "./IEnumerator";
import { ListNode } from "./ListNode";
export interface IEnumerable {
    getEnumerator<T>(): IEnumerator<T>;
}
