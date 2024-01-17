class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }
}
