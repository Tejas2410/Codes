function manualException() {
    const randomNumber = Math.floor(Math.random()*100);

    if(randomNumber % 2 == 0) {
        return randomNumber;
    } else {
        throw "Random Number is odd";
    }
}

function caller() {
    try{
        console.log("This is risky");
        
        // once exception occurs code will immediatly go to catch block
        const response = manualException(); 
        console.log("risky code working fine", response);
    }
    catch(exception) {
        console.log("Bad luck we are in catch");
        console.log(exception);
        
    }
}

caller();