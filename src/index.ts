import { NumberCollection } from './NumberCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumberCollection([10, 3, -5, 0]));
console.log('Before : ', sorter.collection.collection);

sorter.sort();

console.log('After : ', sorter.collection.collection);
