System.register(["./ListNode"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListNode_1, LinkedList;
    return {
        setters: [
            function (ListNode_1_1) {
                ListNode_1 = ListNode_1_1;
            }
        ],
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
                insert(index, value) {
                    if (index < 0 || index > this._count) {
                        throw new Error("Index out of bounds.");
                    }
                    const newNode = new ListNode_1.ListNode(value);
                    if (this._count === 0 && index === 0) {
                        this._head = newNode;
                        this._tail = this._head;
                        this._count++;
                    }
                    else if (index === 0) {
                        this._head.previous = newNode;
                        newNode.next = this._head;
                        this._head = newNode;
                    }
                    else {
                        let current = this._head;
                        for (let j = 0; j < index; j++) {
                            current = current.next;
                        }
                        if (current === null) {
                            this._tail.next = newNode;
                            newNode.previous = this._tail;
                            this._tail = newNode;
                        }
                    }
                }
                addFirst(value) {
                    this.insert(0, value);
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
            };
            exports_1("LinkedList", LinkedList);
        }
    };
});
//# sourceMappingURL=LinkedList.js.map