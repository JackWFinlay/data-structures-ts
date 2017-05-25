import { AbstractNode } from "./AbstractNode";
export interface IEnumerator<T> {
    current(): AbstractNode<T>;
    moveNext(): AbstractNode<T>;
    reset(): void;
}
