System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbstractNode;
    return {
        setters: [],
        execute: function () {
            AbstractNode = class AbstractNode {
                constructor(_value = null) {
                    this._value = _value;
                }
                get value() {
                    return this._value;
                }
                set value(value) {
                    this._value = value;
                }
            };
            exports_1("AbstractNode", AbstractNode);
        }
    };
});
//# sourceMappingURL=AbstractNode.js.map