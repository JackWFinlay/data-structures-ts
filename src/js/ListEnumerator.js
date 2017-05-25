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
                }
                current() {
                    throw new Error("Not yet implemented.");
                }
                moveNext() {
                    throw new Error("Not yet implemented.");
                }
                reset() {
                    throw new Error("Not yet implemented.");
                }
            };
            exports_1("ListEnumerator", ListEnumerator);
        }
    };
});
//# sourceMappingURL=ListEnumerator.js.map