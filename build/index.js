"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const CharacterCollection_1 = require("./CharacterCollection");
const charsCollection = new CharacterCollection_1.CharacterCollection("xybxsarup");
const sorter = new sorter_1.Sorter(charsCollection);
console.log(sorter.sort().collection);
