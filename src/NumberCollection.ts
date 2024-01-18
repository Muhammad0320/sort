import { SortableCollection, Sorter } from "./sorter";

export class NumbersCollection extends Sorter implements SortableCollection {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNumber = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];

    this.data[rightIndex] = leftNumber;
  }
}
