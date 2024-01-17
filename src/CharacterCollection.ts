import { SortableCollection } from "./sorter";

export class CharacterCollection implements SortableCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    const leftChars = characters[leftIndex];

    characters[leftIndex] = characters[rightIndex];

    characters[rightIndex] = leftChars;

    this.data = characters.join("");
  }
}
