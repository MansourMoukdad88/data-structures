var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.leg = 0;
this.storage = {};
};
Stack.prototype.push = function (value) {
	    this.storage[this.leg] = value;
        this.leg++;
};
Stack.prototype.pop= function() {
    if(this.leg > 0) {
      this.leg --  
      var val = this.storage[this.leg]
      delete this.storage[this.leg]
      return val;

    } else {
      return true;
    }
  };
  Stack.prototype.size = function() {
        return this.leg;
    }

var An = new Stack()