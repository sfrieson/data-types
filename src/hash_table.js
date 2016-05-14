var exp = {};

// Assuming Strings and Arrays exist, implement a hash table
// #1
// I need to store several keys and values.
var keys    = [],
    values  = [];
// A specific key needs to point to a specific value.
var hash = function(key, value) {
    var index;
    if(key && value){

        // Check if key already exists
        if (keys.indexOf(key) > -1) index = keys.indexOf(key);
        else index = (keys.push(key)) - 1; // Push the key and grab the resulting length


        // Place at the same index;
        values[index] = value;
    }
    // When I access that key, the value should be returned
    if(key && !value) {
        index = keys.indexOf(key);
        return values[index];
    }
};


// For spec
exp.keys = keys;
exp.values = values;
exp.hash = hash;

module.exports = exp;
