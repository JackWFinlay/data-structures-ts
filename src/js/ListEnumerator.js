System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListEnumerator;
    return {
        setters: [],
        execute: function () {
            ListEnumerator = class ListEnumerator {
                constructor(linkedList) {
                    this.linkedList = linkedList;
                    this.currentNode = null;
                    this.currentNode = linkedList.first;
                }
                current() {
                    return this.currentNode;
                }
                moveNext() {
                    return this.currentNode.next;
                }
                reset() {
                    this.currentNode = this.linkedList.first;
                }
            };
            exports_1("ListEnumerator", ListEnumerator);
        }
    };
});
//# sourceMappingURL=ListEnumerator.js.map