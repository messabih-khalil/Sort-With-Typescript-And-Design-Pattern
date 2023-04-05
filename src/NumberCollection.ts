export class NumberCollection {
  constructor(public data: number[]) {}
  // Get Length
  get length(): number {
    return this.data.length;
  }

  // Compare two element from the list

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  // Swap array elements
  swap(leftIdx: number, rightIdx: number): void {
    [this.data[leftIdx], this.data[rightIdx]] = [
      this.data[rightIdx],
      this.data[leftIdx],
    ];
  }
}
