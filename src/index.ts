class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  // Bubble Sort

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          [this.collection[j], this.collection[j + 1]] = [
            this.collection[j + 1],
            this.collection[j],
          ];
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log('Before : ', sorter.collection);

sorter.sort();

console.log('After : ', sorter.collection);
