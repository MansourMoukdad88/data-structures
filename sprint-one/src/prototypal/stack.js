var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var stack =Object.create(stackMethods);
 	stack.storage = {}
 	stack.len = 0 ;
return stack
};

var stackMethods = {};


    stackMethods.push = function(value) {
        this.storage[this.len] = value;
        this.len++;
    };

  stackMethods.pop = function() {
    if(this.len > 0) {
      this.len --  
      var val = this.storage[this.len]
      delete this.storage[this.len]
      return val;

    } else {
      return true;
    }
  };
    
    stackMethods.size = function() {
        return this.len;
    }