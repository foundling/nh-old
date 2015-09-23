function abc() {
    for(var i = 0; i < 10; i++) {
        debugger;
        if (i === 5) {
            console.log(i);
        }
    }
}

console.log(abc());
