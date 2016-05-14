var ADT = require('../abstract_data_types.js');

describe("A hash table function", function(){
    var keys = ADT.hash.keys;
    var values = ADT.hash.values;
    var hash = ADT.hash.hash;
    var key = "apple";
    var value = "";

    beforeAll(function(){
        hash(key, value);
    });

    describe("when given a key and a value", function(){
        it("should store both in an array", function(){
            expect(keys.length).toBeGreaterThan(0);
            expect(values.length).toBeGreaterThan(0);
        });
        it("should store both under the same index", function(){
            expect(keys.indexOf(key)).toEqual(values.indexOf(value));
        });

        describe("and the key already exists", function(){
            beforeAll(function(){
                hash(key, "Macintosh");
            });

            it("should overwrite the key with the new value", function(){
                expect(keys.indexOf(key)).not.toEqual(values.indexOf(value));
            });
        });
    });

    describe("when given only a key", function(){
        it("should return the appropriate value", function(){
            expect(hash(key)).toBeTruthy();
        });
    });
});
