var ADT = require('../abstract_data_types.js');

describe("A linked list,", function(){
    var llist;
    describe("when it is initialized", function(){
        beforeAll(function () {
            llist = new ADT.LinkedList();
        });
        it('should have the value "head" and point to null', function(){
            expect(llist.value).toBe("head");
            expect(llist.next).toBe(null);
        });
    });
    describe("when an item is inserted", function(){
        describe("and no position is specified", function(){
            beforeAll(function(){
                llist.insert(5);
            });
            it('should insert the item last', function(){
                expect(llist.next.value).toBe(5);
            });
        });
        describe("and a position is specified", function(){
            beforeAll(function(){
                llist.insert(2);
                llist.insert(3, "head");
            });
            it('should insert after that point', function(){
                expect(llist.next.value).toBe(3);
                expect(llist.next.next.value).toBe(5);
                expect(llist.next.next.next.value).toBe(2);
            });
        });
    });
    describe("when delete is called", function () {
        describe("and a value is specified", function(){
            it("should set the previous' pointer to the following node.", function(){
                llist.delete(5);
                expect(llist.next.value).toBe(3);
                expect(llist.next.next.value).toBe(2);
            });
        });
        describe("and 'head' is specified", function(){
            it("should delete the whole list.", function(){
                llist.delete('head');
                expect(llist.next).toBe(null);
                expect(llist.value).toBe("head");
            });
        });
    });

    describe("when reverse is called", function () {
        beforeAll(function () {
            llist = new ADT.LinkedList();
            llist.insert(4);
            llist.insert(3);
            llist.insert(2);
            llist.insert(1);
            llist.reverse();
            llist.display();
        });
        it("should reverse the order of the linked list", function(){
            expect(llist.next.value).toBe(1);
            expect(llist.next.next.value).toBe(2);
            expect(llist.next.next.next.value).toBe(3);
            expect(llist.next.next.next.next.value).toBe(4);
            expect(llist.next.next.next.next.next).toBe(null);
        });
    });

    describe("when search is called", function(){
        var result;
        beforeAll(function(){
            result = llist.search(3);
        });
        it("should return the node.", function(){
            expect(result.value).toBe(3);
            expect(result.hasOwnProperty("next")).toBeTruthy();
        });
    });
});
