var Stack = function() {
    var stack = {};
     stack.storage = {};
     stack.length= 0

  _.extend(stack, stackMethods);
    return stack;
};

var stackMethods = {};

    stackMethods.push = function(value) {
        this.storage[this.length] = value;
        this.length++;
    };

  stackMethods.pop = function() {
    if(this.length > 0) {
      this.length --  
      var val = this.storage[this.length]
      delete this.storage[this.length]
      return val;

    } else {
      return true;
    }
  };
    
    stackMethods.size = function() {
        return this.length;
    }
