import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  // Get Length
  get length(): number {
    return this.data.length;
  }

  // Compare two element from the list

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  // Swap array elements
  swap(leftIdx: number, rightIdx: number): void {
    const chars: string[] = this.data.split('');
    const temp = chars[leftIdx];
    chars[leftIdx] = chars[rightIdx];
    chars[rightIdx] = temp;

    this.data = chars.join('');
  }
}
