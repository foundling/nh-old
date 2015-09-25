# node-help
[![Build Status](https://travis-ci.org/foundling/node-help.svg?branch=master)](https://travis-ci.org/foundling/node-help)

````node-help```` is a node module that integrates the standard node REPL with documentation and colors. Our sources currently include the Mozilla Developer Network JavaScript language references for ECMAScript5 and the Node api docs for your node version.  

To install node-help, run the following commands: 

+ `npm install -g node-help`
+ `node-help`
+ in the node-help repl, use the help() or i() functions to get help on something you want to know more about.

-------------------------------
````
>> var a =  9.0
>> i(a) 
name: 9.0
type: Number
node module: false
description: 
The Number JavaScript object is a wrapper object allowing you to work with numerical
values. A Number object is created using the Number() constructor.
````

````````bash
>> docs('Array') 
name: Array
node module: false
type: function

description: 
  Arrays are list-like objects whose prototype has methods to perform  
  traversal and mutation operations. Neither the length of a JavaScript array  
  nor the types of its elements are fixed. Since an array's size length grow  
  or shrink at any time, JavaScript arrays are not guaranteed to be dense. In  
  general, these are convenient characteristics; but if these features are not  
  desirable for your particular use, you might consider using typed arrays.   
  Some people think that you shouldn't use an array as an associative array.  
  In any case, you can use plain objects instead, although doing so comes with  
  its own caveats. See the post Lightweight JavaScript dictionaries with  
  arbitrary keys as an example.  

isNative :  no
methods
   from
   isArray
   observe
   of
   copyWithinkk
   ...
````
````````bash
var WS = require('stream').Writeable;
>> i(new WS()); 
name: WS
type: Stream
node module: TRUE
description: The Writable stream interface is an abstraction for a destination that you are writing data to. Examples of writable streams include:

http requests, on the client
http responses, on the server
fs write streams
zlib streams
crypto streams
tcp sockets
child process stdin
process.stdout, process.stderr

[nodejs.org/docs/latest-v0.10.x/api/stream.html#stream_class_stream_writable]

````
--------------------------------
Contributors: Alex Ramsdell, Stan Zhao, Kassim Siddiqui
