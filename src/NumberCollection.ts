export class NumberCollection {
  constructor(public collection: number[]) {}
  // Get Length
  get length() {
    return this.collection.length;
  }

  // Compare two element from the list

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.collection[leftIdx] > this.collection[rightIdx];
  }

  // Swap array elements
  swap(leftIdx: number, rightIdx: number): void {
    [this.collection[leftIdx], this.collection[rightIdx]] = [
      this.collection[rightIdx],
      this.collection[leftIdx],
    ];
  }
}
