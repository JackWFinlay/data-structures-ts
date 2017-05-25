System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbstractNode;
    return {
        setters: [],
        execute: function () {
            AbstractNode = class AbstractNode {
                constructor(nodeValue = null) {
                    this.nodeValue = nodeValue;
                }
                get value() {
                    return this.nodeValue;
                }
                set value(value) {
                    this.nodeValue = value;
                }
            };
            exports_1("AbstractNode", AbstractNode);
        }
    };
});
//# sourceMappingURL=AbstractNode.js.map