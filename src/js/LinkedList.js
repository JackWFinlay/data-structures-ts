System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList;
    return {
        setters: [],
        execute: function () {
            LinkedList = class LinkedList {
                constructor(_head = null) {
                    this._head = _head;
                    this._count = 0;
                    this._tail = null;
                    if (_head) {
                        this._tail = _head;
                        this._count++;
                    }
                }
                add(index, node) {
                    if (this._count === 0 && index !== 0) {
                        throw new Error("Index does not exist.");
                    }
                }
                asArray() {
                    throw new Error("Not yet implemented.");
                }
                get(index) {
                    throw new Error("Not yet implemented.");
                }
                get first() {
                    return this._head;
                }
                get last() {
                    return this._tail;
                }
                get count() {
                    return this._count;
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