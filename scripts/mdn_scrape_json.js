{
    "Object": {
        "description": "The Object constructor creates an object wrapper. The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.\n\nWhen called in a non-constructor context, Object behaves identically to new Object().\nObjects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).\nAn object initializer is an expression that describes the initialization of an Object. Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.",
        "properties": {
            "length": {
                "name": "Object.length",
                "description": "Has a value of 1."
            },
            "prototype": {
                "name": "Object.prototype",
                "description": "Allows the addition of properties to all objects of type Object."
            }
        },
        "methods": {
            "assign": {
                "name": "Object.assign()",
                "description": "Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object."
            },
            "create": {
                "name": "Object.create()",
                "description": "Creates a new object with the specified prototype object and properties."
            },
            "defineProperty": {
                "name": "Object.defineProperty()",
                "description": "Adds the named property described by a given descriptor to an object."
            },
            "defineProperties": {
                "name": "Object.defineProperties()",
                "description": "Adds the named properties described by the given descriptors to an object."
            },
            "freeze": {
                "name": "Object.freeze()",
                "description": "Freezes an object: other code can't delete or change any properties."
            },
            "getOwnPropertyDescriptor": {
                "name": "Object.getOwnPropertyDescriptor()",
                "description": "Returns a property descriptor for a named property on an object."
            },
            "getOwnPropertyNames": {
                "name": "Object.getOwnPropertyNames()",
                "description": "Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties."
            },
            "getOwnPropertySymbols": {
                "name": "Object.getOwnPropertySymbols()",
                "description": "Returns an array of all symbol properties found directly upon a given object."
            },
            "getPrototypeOf": {
                "name": "Object.getPrototypeOf()",
                "description": "Returns the prototype of the specified object."
            },
            "is": {
                "name": "Object.is()",
                "description": "Compares if two values are distinguishable (ie. the same)"
            },
            "isExtensible": {
                "name": "Object.isExtensible()",
                "description": "Determines if extending of an object is allowed."
            },
            "isFrozen": {
                "name": "Object.isFrozen()",
                "description": "Determines if an object was frozen."
            },
            "isSealed": {
                "name": "Object.isSealed()",
                "description": "Determines if an object is sealed."
            },
            "keys": {
                "name": "Object.keys()",
                "description": "Returns an array containing the names of all of the given object's own enumerable properties."
            },
            "observe": {
                "name": "Object.observe()",
                "description": "Asynchronously observes changes to an object."
            },
            "getNotifier": {
                "name": "Object.getNotifier()",
                "description": "Get a notifier with which to create object changes manually."
            },
            "preventExtensions": {
                "name": "Object.preventExtensions()",
                "description": "Prevents any extensions of an object."
            },
            "seal": {
                "name": "Object.seal()",
                "description": "Prevents other code from deleting properties of an object."
            },
            "setPrototypeOf": {
                "name": "Object.setPrototypeOf()",
                "description": "Sets the prototype (i.e., the internal [[Prototype]] property)"
            }
        }
    },
    "String": {
        "description": "The String global object is a constructor for strings, or a sequence of characters. Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.",
        "properties": {
            "prototype": {
                "name": "String.prototype",
                "description": "Allows the addition of properties to a String object."
            },
            "prototype.constructor": {
                "name": "String.prototype.constructor",
                "description": "Specifies the function that creates an object's prototype."
            },
            "prototype.length": {
                "name": "String.prototype.length",
                "description": "Reflects the length of the string."
            }
        },
        "methods": {
            "fromCharCode": {
                "name": "String.fromCharCode()",
                "description": "Returns a string created by using the specified sequence of Unicode values."
            },
            "fromCodePoint": {
                "name": "String.fromCodePoint()",
                "description": "Returns a string created by using the specified sequence of code points."
            },
            "raw": {
                "name": "String.raw()",
                "description": "Returns a string created from a raw template string."
            },
            "prototype.charCodeAt": {
                "name": "String.prototype.charCodeAt()",
                "description": "Returns a non-negative integer that is the UTF-16 encoded code point value at the given position."
            },
            "prototype.concat": {
                "name": "String.prototype.concat()",
                "description": "Combines the text of two strings and returns a new string."
            },
            "prototype.includes": {
                "name": "String.prototype.includes()",
                "description": "Determines whether one string may be found within another string."
            },
            "prototype.endsWith": {
                "name": "String.prototype.endsWith()",
                "description": "Determines whether a string ends with the characters of another string."
            },
            "prototype.indexOf": {
                "name": "String.prototype.indexOf()",
                "description": "Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found."
            },
            "prototype.lastIndexOf": {
                "name": "String.prototype.lastIndexOf()",
                "description": "Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found."
            },
            "prototype.localCompare": {
                "name": "String.prototype.localCompare()",
                "description": "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order."
            },
            "prototype.match": {
                "name": "String.prototype.match()",
                "description": "Used to match a regular expression against a string."
            },
            "prototype.normalize": {
                "name": "String.prototype.normalize()",
                "description": "Returns the Unicode Normalization Form of the calling string value."
            },
            "prototype.repeat": {
                "name": "String.prototype.repeat()",
                "description": "Returns a string consisting of the elements of the object repeated the given times."
            },
            "prototype.replace": {
                "name": "String.prototype.replace()",
                "description": "Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring."
            },
            "prototype.search": {
                "name": "String.prototype.search()",
                "description": "Executes the search for a match between a regular expression and a specified string."
            },
            "prototype.slice": {
                "name": "String.prototype.slice()",
                "description": "Extracts a section of a string and returns a new string."
            },
            "prototype.split": {
                "name": "String.prototype.split()",
                "description": "Splits a String object into an array of strings by separating the string into substrings."
            },
            "prototype.startsWith": {
                "name": "String.prototype.startsWith()",
                "description": "Determines whether a string begins with the characters of another string."
            },
            "prototype.substr": {
                "name": "String.prototype.substr()",
                "description": "Returns the characters in a string beginning at the specified location through the specified number of characters."
            },
            "prototype.substring": {
                "name": "String.prototype.substring()",
                "description": "Returns the characters in a string between two indexes into the string."
            },
            "prototype.toLocaleLowerCase": {
                "name": "String.prototype.toLocaleLowerCase()",
                "description": "The characters within a string are converted to lower case while respecting the current locale. For most languages, this will return the same as toLowerCase()."
            },
            "prototype.toLocaleUpperCase": {
                "name": "String.prototype.toLocaleUpperCase()",
                "description": "The characters within a string are converted to upper case while respecting the current locale. For most languages, this will return the same as toUpperCase()."
            },
            "prototype.toLowerCase": {
                "name": "String.prototype.toLowerCase()",
                "description": "Returns the calling string value converted to lower case."
            },
            "prototype.toSource": {
                "name": "String.prototype.toSource()",
                "description": "Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method. The toSource() method returns a string representing the source code of the object."
            },
            "prototype.toString": {
                "name": "String.prototype.toString()",
                "description": "Returns a string representing the specified object. Overrides the Object.prototype.toString() method."
            },
            "prototype.toUpperCase": {
                "name": "String.prototype.toUpperCase()",
                "description": "Returns the calling string value converted to uppercase."
            },
            "prototype.trim": {
                "name": "String.prototype.trim()",
                "description": "Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard"
            },
            "prototype.trimLeft": {
                "name": "String.prototype.trimLeft()",
                "description": "Trims whitespace from the left side of the string."
            },
            "prototype.trimRight": {
                "name": "String.prototype.trimRight()",
                "description": "Trims whitespace from the right side of the string."
            },
            "prototype.valueOf": {
                "name": "String.prototype.valueOf()",
                "description": "Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method."
            },
            "prototype[@@iterator]": {
                "name": "String.prototype[@@iterator]()",
                "description": "Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value."
            }
        }
    },
    "Array": {
        "description": "Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's size length grow or shrink at any time, JavaScript arrays are not guaranteed to be dense. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.\n\nSome people think that you shouldn't use an array as an associative array. In any case, you can use plain objects instead, although doing so comes with its own caveats. See the post Lightweight JavaScript dictionaries with arbitrary keys as an example.",
        "properties": {
            "length": {
                "name": "Array.length",
                "description": "The Array constructor's length property whose value is 1."
            },
            "prototype": {
                "name": "Array.prototype",
                "description": "Allows the addition of properties to all array objects."
            },
            "prototype.constructor": {
                "name": "Array.prototype.constructor",
                "description": "Specifies the function that creates an object's prototype."
            },
            "prototype.length": {
                "name": "Array.prototype.length",
                "description": "Reflects the number of elements in an array."
            }
        },
        "methods": {
            "from": {
                "name": "Array.from()",
                "description": "Creates a new Array instance from an array-like or iterable object."
            },
            "isArray": {
                "name": "Array.isArray()",
                "description": "Returns true if a variable is an array, if not false."
            },
            "observe": {
                "name": "Array.observe()",
                "description": "Asynchronously observes changes to Arrays, similar to Object.observe() for objects. It provides a stream of changes in order of occurrence."
            },
            "of": {
                "name": "Array.of()",
                "description": "Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."
            },
            "prototype.copyWithin": {
                "name": "Array.prototype.copyWithin()",
                "description": "Copies a sequence of array elements within the array."
            },
            "prototype.fill": {
                "name": "Array.prototype.fill()",
                "description": "Fills all the elements of an array from a start index to an end index with a static value."
            },
            "prototype.pop": {
                "name": "Array.prototype.pop()",
                "description": "Removes the last element from an array and returns that element."
            },
            "prototype.push": {
                "name": "Array.prototype.push()",
                "description": "Adds one or more elements to the end of an array and returns the new length of the array."
            },
            "prototype.reverse": {
                "name": "Array.prototype.reverse()",
                "description": "Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first."
            },
            "prototype.shift": {
                "name": "Array.prototype.shift()",
                "description": "Removes the first element from an array and returns that element."
            },
            "prototype.sort": {
                "name": "Array.prototype.sort()",
                "description": "Sorts the elements of an array in place and returns the array."
            },
            "prototype.splice": {
                "name": "Array.prototype.splice()",
                "description": "Adds and/or removes elements from an array."
            },
            "prototype.unshift": {
                "name": "Array.prototype.unshift()",
                "description": "Adds one or more elements to the front of an array and returns the new length of the array."
            },
            "prototype.concat": {
                "name": "Array.prototype.concat()",
                "description": "Returns a new array comprised of this array joined with other array(s) and/or value(s)."
            },
            "prototype.includes": {
                "name": "Array.prototype.includes()",
                "description": "Determines whether an array contains a certain element, returning true or false as appropriate."
            },
            "prototype.join": {
                "name": "Array.prototype.join()",
                "description": "Joins all elements of an array into a string."
            },
            "prototype.slice": {
                "name": "Array.prototype.slice()",
                "description": "Extracts a section of an array and returns a new array."
            },
            "prototype.toSource": {
                "name": "Array.prototype.toSource()",
                "description": "Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method."
            },
            "prototype.toString": {
                "name": "Array.prototype.toString()",
                "description": "Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method."
            },
            "prototype.toLocaleString": {
                "name": "Array.prototype.toLocaleString()",
                "description": "Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method."
            },
            "prototype.indexOf": {
                "name": "Array.prototype.indexOf()",
                "description": "Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found."
            },
            "prototype.lastIndexOf": {
                "name": "Array.prototype.lastIndexOf()",
                "description": "Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found."
            },
            "prototype.forEach": {
                "name": "Array.prototype.forEach()",
                "description": "Calls a function for each element in the array."
            },
            "prototype.entries": {
                "name": "Array.prototype.entries()",
                "description": "Returns a new Array Iterator object that contains the key/value pairs for each index in the array."
            },
            "prototype.every": {
                "name": "Array.prototype.every()",
                "description": "Returns true if every element in this array satisfies the provided testing function."
            },
            "prototype.some": {
                "name": "Array.prototype.some()",
                "description": "Returns true if at least one element in this array satisfies the provided testing function."
            },
            "prototype.filter": {
                "name": "Array.prototype.filter()",
                "description": "Creates a new array with all of the elements of this array for which the provided filtering function returns true."
            },
            "prototype.find": {
                "name": "Array.prototype.find()",
                "description": "Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found."
            },
            "prototype.findIndex": {
                "name": "Array.prototype.findIndex()",
                "description": "Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found."
            },
            "prototype.keys": {
                "name": "Array.prototype.keys()",
                "description": "Returns a new Array Iterator that contains the keys for each index in the array."
            },
            "prototype.maps": {
                "name": "Array.prototype.maps()",
                "description": "Creates a new array with the results of calling a provided function on every element in this array."
            },
            "prototype.reduce": {
                "name": "Array.prototype.reduce()",
                "description": "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value."
            },
            "prototype.reduceRight": {
                "name": "Array.prototype.reduceRight()",
                "description": "Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value."
            },
            "prototype.values": {
                "name": "Array.prototype.values()",
                "description": "Returns a new Array Iterator object that contains the values for each index in the array."
            },
            "prototype[@@iterator]": {
                "name": "Array.prototype[@@iterator]()",
                "description": "Returns a new Array Iterator object that contains the values for each index in the array."
            }
        }
    },
    "Function": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": "",
                "description": ""
            },
            "property2": {
                "name": "",
                "description": ""
            }
        },
        "methods": {
            "method1": {
                "name": "",
                "description": ""
            },
            "method2": {
                "name": "",
                "description": ""
            }
        }
    },
    "Number": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": "",
                "description": ""
            },
            "property2": {
                "name": "",
                "description": ""
            }
        },
        "methods": {
            "method1": {
                "name": "",
                "description": ""
            },
            "method2": {
                "name": "",
                "description": ""
            }
        }
    },
    "Boolean": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": "",
                "description": ""
            },
            "property2": {
                "name": "",
                "description": ""
            }
        },
        "methods": {
            "method1": {
                "name": "",
                "description": ""
            },
            "method2": {
                "name": "",
                "description": ""
            }
        }
    }
}
