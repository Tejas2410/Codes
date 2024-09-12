/**
    Step 1 -> start will print
    Step 2 -> js will trigger timer to the runtime env 
    Step 3 -> Promise Cons will call exec cb ans line 1 will be printed
    Step 4 -> exec cb timer will start by runtime env (browser feature)
    Step 5 -> for loop will start in main thread and then end will be printed
    Step 6 -> Timer 1 cb will go to MacroTask queue and event loop will check
    if call stack is empty or not , if empty cb will be executed
    Step 7 -> exec cb timer will go in call stack and resolver func will be called
    Step 8 -> onfulfillment array func f and h will be executed  
 */

console.log("start");

setTimeout(() => {
    console.log("timer 1 done");
    
} , 1000)

const pr = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by Promise Constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        
        if(randomNumber % 2 === 0) {
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    } , 2000)
})

pr.then(function f(){console.log("Executing f");} , function g(){console.log("Executing g");});
pr.then(function h() {console.log("Executing h");}, function i() {console.log("Executing i")});

for(let i = 0 ; i < 10000000000 ; i++) {};

console.log("end");
