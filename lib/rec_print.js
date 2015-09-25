function print(obj) {
    Object.keys(db).forEach(function(key,value,index){
        if (obj[key]) {
            console.log(key, ': ', obj[key]);
            print(obj[key]);
        }
        else console.log(key);
    });
}

