{
    "Object": {
        "description": "The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.\n\nWhen called in a non-constructor context, Object behaves identically to new Object().",
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
        "description": "Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.",
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
                "name": "String.fromCodePoint() ",
                "description": "Returns a string created by using the specified sequence of code points."
            },
            "raw": {
                "name": "String.raw() ",
                "description": "Returns a string created from a raw template string."
            },
            "prototype.charCodeAt": {
                "name": "String.prototype.charCodeAt() ",
                "description": "Returns a non-negative integer that is the UTF-16 encoded code point value at the given position."
            },
            "prototype.concat": {
                "name": "String.prototype.concat() ",
                "description": "Combines the text of two strings and returns a new string."
            },
            "prototype.includes": {
                "name": "String.prototype.includes() ",
                "description": "Determines whether one string may be found within another string."
            },
            "prototype.endsWith": {
                "name": "String.prototype.endsWith() ",
                "description": "Determines whether a string ends with the characters of another string."
            },
            "prototype.indexOf": {
                "name": "String.prototype.indexOf() ",
                "description": "Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found."
            },
            "prototype.lastIndexOf": {
                "name": "String.prototype.lastIndexOf() ",
                "description": "Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found."
            },
            "prototype.localCompare": {
                "name": "String.prototype.localCompare() ",
                "description": "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order."
            },
            "prototype.match": {
                "name": "String.prototype.match() ",
                "description": "Used to match a regular expression against a string."
            },
            "prototype.normalize": {
                "name": "String.prototype.normalize() ",
                "description": "Returns the Unicode Normalization Form of the calling string value."
            },
            "prototype.repeat": {
                "name": "String.prototype.repeat() ",
                "description": "Returns a string consisting of the elements of the object repeated the given times."
            },
            "prototype.replace": {
                "name": "String.prototype.replace() ",
                "description": "Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring."
            },
            "prototype.search": {
                "name": "String.prototype.search() ",
                "description": "Executes the search for a match between a regular expression and a specified string."
            },
            "prototype.slice": {
                "name": "String.prototype.slice() ",
                "description": "Extracts a section of a string and returns a new string."
            },
            "prototype.split": {
                "name": "String.prototype.split() ",
                "description": "Splits a String object into an array of strings by separating the string into substrings."
            },
            "prototype.startsWith": {
                "name": "String.prototype.startsWith() ",
                "description": "Determines whether a string begins with the characters of another string."
            },
            "prototype.substr": {
                "name": "String.prototype.substr() ",
                "description": "Returns the characters in a string beginning at the specified location through the specified number of characters."
            },
            "prototype.substring": {
                "name": "String.prototype.substring() ",
                "description": "Returns the characters in a string between two indexes into the string."
            },
            "prototype.toLocaleLowerCase": {
                "name": "String.prototype.toLocaleLowerCase() ",
                "description": "The characters within a string are converted to lower case while respecting the current locale. For most languages, this will return the same as toLowerCase()."
            },
            "prototype.toLocaleUpperCase": {
                "name": "String.prototype.toLocaleUpperCase() ",
                "description": "The characters within a string are converted to upper case while respecting the current locale. For most languages, this will return the same as toUpperCase()."
            },
            "prototype.toLowerCase": {
                "name": "String.prototype.toLowerCase() ",
                "description": "Returns the calling string value converted to lower case."
            },
            "prototype.toSource": {
                "name": "String.prototype.toSource() ",
                "description": "Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method. The toSource() method returns a string representing the source code of the object."
            },
            "prototype.toString": {
                "name": "String.prototype.toString() ",
                "description": "Returns a string representing the specified object. Overrides the Object.prototype.toString() method."
            },
            "prototype.toUpperCase": {
                "name": "String.prototype.toUpperCase() ",
                "description": "Returns the calling string value converted to uppercase."
            },
            "prototype.trim": {
                "name": "String.prototype.trim() ",
                "description": "Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard"
            },
            "prototype.trimLeft": {
                "name": "String.prototype.trimLeft() ",
                "description": "Trims whitespace from the left side of the string."
            },
            "prototype.trimRight": {
                "name": "String.prototype.trimRight() ",
                "description": "Trims whitespace from the right side of the string."
            },
            "prototype.valueOf": {
                "name": "String.prototype.valueOf() ",
                "description": "Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method."
            },
            "prototype.[@@iterator]": {
                "name": "String.prototype.[@@iterator]() ",
                "description": "Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value."
            },
        }
    },
    "Array": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "property2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        },
        "methods": {
            "method1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "method2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        }
    },
    "Function": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "property2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        },
        "methods": {
            "method1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "method2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        }
    },
    "Number": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "property2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        },
        "methods": {
            "method1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "method2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        }
    },
    "Boolean": {
        "description": "name description",
        "properties": {
            "property1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "property2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        },
        "methods": {
            "method1": {
                "name": ".get",
                "description": "to get stuff"
            },
            "method2": {
                "name": ".remove",
                "description": "to remove stuff"
            }
        }
    }
}
