import { AbstractNode } from "./AbstractNode";
export interface IEnumerator {
    current(): AbstractNode<T>;
    moveNext(): AbstractNode<T>;
    reset(): void;
}
