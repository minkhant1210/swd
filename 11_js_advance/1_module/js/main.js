// import {area,volume} from './square.js';
// import { area as recArea , volume as recVolume } from "./rectangle.js";

// console.log(area(5));
// console.log(volume(5));
// console.log(recArea(4,5));
// console.log(recVolume(4,5,2));

import * as Square from "./square.js";
import * as Rectangle from "./rectangle.js";
import mySelf from "./me.js";

console.log(Square.area(5));
console.log(Rectangle.area(4,3));
console.log(Rectangle.recDef);
console.log(mySelf());
console.log(mySelf().showName());
console.log(mySelf().name);