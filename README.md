# node-help
[![Build Status](https://travis-ci.org/foundling/node-help.svg?branch=master)](https://travis-ci.org/foundling/node-help)

````nodehelp```` is a node module that integrates the standard node REPL with documentation and colors. Our sources currently include the Mozilla Developer Network JavaScript language references for ECMAScript5 and the Node api docs for your node version.  

To install node ````nodehelp````:

+ run `npm install -g nodehelp`
+ run `nodehelp`
+ get help on something you want to know more about

````bash
>> help(Array).prototype) 
name: the Array Prototype
type: object
description: 

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. 
Neither the length of a JavaScript array nor the types of its elements are fixed.

Since an array's size length grow or shrink at any time, JavaScript arrays are not guaranteed to be dense. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
