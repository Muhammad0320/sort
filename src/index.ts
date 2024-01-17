import { Sorter } from "./sorter";
import { CharacterCollection } from "./CharacterCollection";

const charsCollection = new CharacterCollection("xybxsarup");

const sorter = new Sorter(charsCollection);

console.log(sorter.sort().collection);
