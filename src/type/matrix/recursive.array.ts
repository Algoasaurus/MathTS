interface IRecursiveArray extends Array<IRecursiveArray | number> {

}

const m: IRecursiveArray = [5];
