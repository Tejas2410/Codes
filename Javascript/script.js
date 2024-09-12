const pr = new Promise(function exec(res , rej) {
    console.log("Executor callback triggered by promise constructor");
    
    const randomNumber = Math.floor(Math.random() * 100);
    // console.log(randomNumber);
    setTimeout(()=>{
        if(randomNumber % 2 === 0) {
            // random number is even
            res();
        } else {
            // random number is odd
            rej();
        }
    } , 5000)
});

console.log("Created the promise object");
console.log(pr);

