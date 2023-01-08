function resSt(x, n) {
    let result = x
    
    for(i=1; i<n; i++) {
    result = result * x;
    }
    return result
    }
    
    console.log(resSt(2, 3))