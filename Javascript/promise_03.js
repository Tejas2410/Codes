/**
    Step 1 -> p1 will call promise cons and exec will be executed
    Step 2 -> printing and then timer of p1 will be triggered by js
    Step 3 -> pr will call promise cons, promise Cons will call exec cb ans 
    line 1 will be printed 
    Step 4 -> exec cb timer will start by runtime env (browser feature)
    Step 5 -> for loop will start in main thread
    Step 6 -> after 500 mili second event loop will send p1 timer to MacroTask queue 
    and then and event loop will check if the main thread is empty or not , 
    if empty cb will be executed.
    Step 7 -> resolver function will get called and promise status pnding -> fulfilled
    Step 8 -> .then will registered function a and onfulfillment arr func will be in 
    microTask queue and event loop when main thread is empty will send the high piority
    microTask queue func to call stack.
    Step 9 -> after 3 sec event loop will send timer 1 to MacroTask queue 
    and then and event loop will check if the main thread is empty or not , 
    if empty cb will be executed.
    Step 10 -> exec cb timer will go in call stack and resolver func will be called
    Step 11 -> onfulfillment array func f and h will be executed  
 */

    const p1 = new Promise(function exec(res , rej) {
        console.log("Executor callback triggered by Promise Constructor p1");
        setTimeout(() => {
            console.log("Timer of P1 done");
            res(100);
        } , 500) 
    })

    p1.then(function a(){console.log("Executing a")} , function b(){console.log("Executing b")})


    setTimeout(() => {
        console.log("timer 1 done");
        
    } , 3000)
    
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
        } , 4000)
    })
    
    pr.then(function f(v){console.log("Executing f" , v);} , function g(v){console.log("Executing g" , v);});
    pr.then(function h(v) {console.log("Executing h", v);}, function i(v) {console.log("Executing i", v)});
    
    for(let i = 0 ; i < 10000000000 ; i++) {};
    
    