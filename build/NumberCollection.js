"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    // Get Length
    get length() {
        return this.data.length;
    }
    // Compare two element from the list
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    // Swap array elements
    swap(leftIdx, rightIdx) {
        [this.data[leftIdx], this.data[rightIdx]] = [
            this.data[rightIdx],
            this.data[leftIdx],
        ];
    }
}
exports.NumberCollection = NumberCollection;
