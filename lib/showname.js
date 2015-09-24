  var showMe = function(token){
      console.log(arguments.callee.caller.toString());
    };
  token = Buffer;
  showMe(token);
