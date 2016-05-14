var LinkedList = function(){
    this.value = "head";
    this.next = null;
    this.Node = function(value, next){
        this.value = value;
        this.next = next || null;
    };
};

LinkedList.prototype._search = function(value){
    if(value === "head") return this;
    var previous = this;
    var final = this.next;
    while(final && final.value !== value) {
        previous = final;
        final = final.next;
    }
    return previous;
};

LinkedList.prototype.insert = function(value, after){
    if(!after){
        this._search(null).next = new this.Node(value);
    }
    else{
        var result = this._search(after);
        result.next = new this.Node(value, result.next);
    }
};

LinkedList.prototype.delete = function(value){
    if(!value) value = "head"; //delete after head;
    if(value === "head") this.next = null;
    else {
        var result = this._search(value);
        result.next = result.next.next || null;
    }
};

LinkedList.prototype.reverse = function reverse (parent){
    parent = parent || this;

    if(parent.next === null){
        return parent; //Send up new starting node
    } else if(parent.next){
        var start = reverse (parent.next); //Catch new starting node.
        if (parent.value === "head") {
            parent.next.next = null;
            parent.next = start;
        }
        else {
            parent.next.next = parent;
            return start; // keep passing starting node.
        }
    }
};

LinkedList.prototype.search = function(value){
    value = value || null;
    return this._search(value).next;
};

LinkedList.prototype.display = function(){
    var previous = this;
    var final = this.next;

    while(final) {
        console.log(
            "\nNode:" +
            "\n  Value: " + previous.value +
            "\n  Next:  " + previous.next.value
        );
        previous = final;
        final = final.next;
    }

    console.log(
        "\nNode:" +
        "\n  Value: " + previous.value +
        "\n  Next:  null"
    );
};


module.exports = LinkedList;
