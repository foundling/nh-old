function f(token){
    console.log(token.callee);
}

f(Array.prototype.split);
