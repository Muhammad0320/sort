"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const sorter_1 = require("./sorter");
const numberCollection = new NumberCollection_1.NumbersCollection([1, 3, -4, 0, -2]);
const sorter = new sorter_1.Sorter(numberCollection);
console.log(sorter.sort().collection);
