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
                constructor(value) {
                    super(value);
                    this._previous = null;
                    this._next = null;
                }
                get previous() {
                    return this._previous;
                }
                set previous(previous) {
                    this._previous = previous;
                }
                get next() {
                    return this._next;
                }
                set next(node) {
                    this._next = node;
                }
            };
            exports_1("ListNode", ListNode);
        }
    };
});
//# sourceMappingURL=ListNode.js.map