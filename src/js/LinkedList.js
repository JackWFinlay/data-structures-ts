System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList;
    return {
        setters: [],
        execute: function () {
            LinkedList = class LinkedList {
                constructor(head = null) {
                    this.head = head;
                    this.size = 0;
                    this.tail = null;
                    if (head) {
                        this.tail = head;
                        this.size++;
                    }
                }
                add(index, node) {
                    if (this.size === 0 && index !== 0) {
                        throw new Error("Index does not exist.");
                    }
                }
                asArray() {
                    throw new Error("Not yet implemented.");
                }
                get(index) {
                    throw new Error("Not yet implemented.");
                }
                getEnumerator() {
                    throw new Error("Not yet implemented.");
                }
                peek() {
                    throw new Error("Not yet implemented.");
                }
                push(node) {
                    throw new Error("Not yet implemented.");
                }
                pop() {
                    throw new Error("Not yet implemented.");
                }
            };
            exports_1("LinkedList", LinkedList);
        }
    };
});
//# sourceMappingURL=LinkedList.js.map