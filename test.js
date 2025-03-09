
const Decimal = require('decimal.js');
Decimal.set({ precision: 100 });

let sum= new Decimal(0)

let one = new Decimal(-1)
let two = new Decimal(2)

for (let i =0; i<100; i++){
let iv = new Decimal(i)
sum = sum.plus(((one.pow(iv)).div((two.times(iv)).minus(one))))






    if (i%10 === 0){
    console.log(sum.times(4))
    }
}
