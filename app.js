document.addEventListener('DOMContentLoaded', function () {
    let a = 6;
    let b = 2;
 /*    console.log('Promise Chain...');
        slowMath.add(a, b)
           .then((sumVal) => {
               console.log(`${a}+${b}=${sumVal}`);
               slowMath.divide(sumVal, 2)
                   .then((divideVal) => {
                       console.log(`${sumVal}/2=${divideVal}`);
                       slowMath.subtract(divideVal, 3)
                           .then((subtractVal) => {
                               console.log(`${divideVal}-3=${subtractVal}`);
                               slowMath.add(subtractVal, 98)
                                   .then((addVal) => {
                                       console.log(`${subtractVal}+98=${addVal}`);
                                       slowMath.remainder(addVal, 2)
                                           .then((remainderVal) => {
                                               console.log(`remainder: ${addVal}/2=${remainderVal}`);
                                               slowMath.multiply(remainderVal, 50)
                                                   .then((multiplyVal) => {
                                                       console.log(`${remainderVal}*50=${multiplyVal}`);
                                                       slowMath.remainder(multiplyVal, 40)
                                                           .then((remainder40Val) => {
                                                               console.log(`remainder: ${multiplyVal}/40=${remainder40Val}`);
                                                               slowMath.add(remainder40Val, 32)
                                                                   .then((add32Val) => {
                                                                       console.log(`${remainder40Val}+32=${add32Val}`);
                                                                       console.log(`The final result is ${add32Val}`);
                                                                   });
                                                           });
                                                   });
                                           });
                                   });
                           });
                   });
           }).catch((message) => {
               console.log('it blew up'+message);
           }); */
    

    async function doMath() {
        try {
            let sumVal = await slowMath.add(a, b);
            console.log(`${a}+${b}=${sumVal}`);
            let divideVal = await slowMath.divide(sumVal, 2);
            console.log(`${sumVal}/2=${divideVal}`);
            let subtractVal = await slowMath.subtract(divideVal, 3);
            console.log(`${divideVal}-3=${subtractVal}`);
            let addVal = await slowMath.add(subtractVal, 98);
            console.log(`${subtractVal}+98=${addVal}`);
            let remainderVal = await slowMath.remainder(addVal, 2);
            console.log(`remainder: ${addVal}/2=${remainderVal}`);
            let multiplyVal = await slowMath.multiply(remainderVal, 50);
            console.log(`${remainderVal}*50=${multiplyVal}`);
            let remainder40Val = await slowMath.remainder(multiplyVal, 40);
            console.log(`remainder: ${multiplyVal}/40=${remainder40Val}`);
            let add32Val = await slowMath.add(remainder40Val, 32);
            console.log(`${remainder40Val}+32=${add32Val}`);
            console.log(`The final result is ${add32Val}`);

        } catch (e) {
            console.log(e)
        }
    }
console.log('Asynch/Await...');
    doMath();
});

