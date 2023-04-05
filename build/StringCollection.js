"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // Get Length
    get length() {
        return this.data.length;
    }
    // Compare two element from the list
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    // Swap array elements
    swap(leftIdx, rightIdx) {
        const chars = this.data.split('');
        const temp = chars[leftIdx];
        chars[leftIdx] = chars[rightIdx];
        chars[rightIdx] = temp;
        this.data = chars.join('');
    }
}
exports.StringCollection = StringCollection;
