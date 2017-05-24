System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListNode;
    return {
        setters: [],
        execute: function () {
            ListNode = class ListNode {
                constructor(previousNode = null, nextNode = null) {
                    this.previousNode = previousNode;
                    this.nextNode = nextNode;
                    this.value = null;
                }
                get previous() {
                    return this.previousNode;
                }
                set previous(previous) {
                    this.previousNode = previous;
                }
                get next() {
                    return this.nextNode;
                }
            };
            exports_1("ListNode", ListNode);
        }
    };
});
//# sourceMappingURL=ListNode.js.map