import { Complex } from './type/complex/complex.class';
import { add, multiply, sqrt, nthRoot } from './operators/arithmatic.module';

export { Complex, add, multiply, sqrt, nthRoot };

import * as fs from 'fs';

async function load(a: number, b: number) {
    const buf = fs.readFileSync('./addTwo.wasm');
    const lib: any = await WebAssembly.instantiate(new Uint8Array(buf)).
        then((res) => res.instance.exports);

    console.log(lib.addTwo(a, b)); // Prints '4'
}
load(5, 7);
