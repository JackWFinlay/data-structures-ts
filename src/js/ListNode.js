System.register(["./AbstractNode"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbstractNode_1, ListNode;
    return {
        setters: [
            function (AbstractNode_1_1) {
                AbstractNode_1 = AbstractNode_1_1;
            }
        ],
        execute: function () {
            ListNode = class ListNode extends AbstractNode_1.AbstractNode {
                constructor() {
                    super();
                    this.previousNode = null;
                    this.nextNode = null;
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
                set next(node) {
                    this.nextNode = node;
                }
            };
            exports_1("ListNode", ListNode);
        }
    };
});
//# sourceMappingURL=ListNode.js.map