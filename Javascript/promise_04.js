const p1 = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("Timer of p1 done");
        res(100); // pending -> fulfilled ; undefined -> 100
    } , 3000)
});

const p2 = p1.then(function a(){console.log("a");} , function b(){console.log("b")});
// p2 is a new promise
const p3 = p1.then(function a(){console.log("c");} , function b(){console.log("b")});
// p3 is a new promise