function frogJump(i , n , heights) {
    if(i == n) {
        return 0;
    }

    if(i == n - 1) {
        
        return Math.abs(heights[i] - heights[i+1]) + frogJump(i+1 , n , heights);
    }

    if(i > n) {
        return infinity;
    }

    minCostViaIPlusOne = Math.abs(heights[i] - heights[i+1]) + frogJump(i+1 , n , heights);
    minCostViaIPlusTwo = Math.abs(heights[i] - heights[i+2]) + frogJump(i+2 , n , heights);

    return Math.min(minCostViaIPlusOne , minCostViaIPlusTwo);

}

console.log(frogJump(1 , 4 , [undefined,10,30,40,20])); // 30
