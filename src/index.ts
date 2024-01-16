class Sorter {
  constructor(public collection: number[]) {}

  sort() {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];

          this.collection[j] = this.collection[j + 1];

          this.collection[j + 1] = temp;
        }
      }
    }

    return this;
  }
}

const sort = new Sorter([2, -3 - 10, 9, 0]).sort().collection;

console.log(sort);
