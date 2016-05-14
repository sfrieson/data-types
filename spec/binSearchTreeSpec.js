var ADT = require('../abstract_data_types.js');

describe("A Binary Search Tree", function(){
    var tree;
    describe("when it is initialized", function(){
        describe("without an initial value", function(){
            beforeAll(function(){
                tree = new ADT.BinSearchTree();
            });
            it("should have a null root", function(){
                expect(tree.root).toEqual(null);
            });
            it("should set the value of the first insert to the root", function(){
                tree.insert(5);
                expect(tree.root.value).toEqual(5);
            });
        });
        describe("with an initial value", function(){
            it("should set it to the root", function(){
                tree = new ADT.BinSearchTree(10);
                expect(tree.root.value).toEqual(10);
            });
        });
    });

    describe("when a value is inserted", function(){
        beforeAll(function(){
            tree = new ADT.BinSearchTree(5);
            tree.insert(4);
        });
        it("should store the value as a child node.", function(){
            expect(tree.root.left.value).toEqual(4);
        });
    });

    describe("when a value is searched", function(){
        beforeAll(function(){
            tree = new ADT.BinSearchTree(5);
            tree.insert(4);
        });
        var result;
        describe("and the value exists", function(){
            it("should return the node.", function(){
                result = tree.search(4);
                expect(result.value).toEqual(4);
            });
        });
        describe("and the value doesn't exists", function(){
            it("should return `false`.", function(){
                result = tree.search(7);
                expect(result).toEqual(false);
            });
        });
    });

    describe("when a value is deleted", function(){
        beforeAll(function(){
            tree = new ADT.BinSearchTree(4);
            tree.insert(2);
            tree.insert(6);
            tree.insert(1);
            tree.insert(3);
            tree.insert(5);
            tree.insert(7);
            tree.insert(8);
        });
        describe("and it is a leaf", function(){
            it("should set the leaf to null", function(){
                tree.remove(3);
                expect(tree.search(3)).toEqual(false);
                expect(tree.root.left.right).toBeFalsy();
            });
        });
        describe("and it has one child", function(){
            it("should set the parent's reference to that child", function(){
                tree.remove(7);
                expect(tree.search(6).right.value).toEqual(8);
            });
        });
        describe("and it has two children", function(){
            it("should reset itself with a middle-most leaf", function(){
                tree.insert(7);
                tree.remove(6);
                expect(tree.root.right.value).toEqual(7);
            });
        });
    });
});
