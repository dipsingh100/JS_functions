function doConsole(){
    console.log("Hello Dear!");
}

function getSum(a,b){
    console.log(a+b);
}

const arrowfunc = ()=>{
    console.log("Arrow function called!")
}

function getFactorial(n){
    return n*getFactorial(n-1);
}