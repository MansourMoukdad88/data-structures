var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    storage:{},
    size: 0
  };

  // storage.size = 0;

  _.extend(stack, stackMethods);
  return stack;
};
   

   var stackMethods = {

    push: function(value) {
    this.storage[this.size] = value;
    this.size++
  },

  pop: function() {
    if(this.size > 0) {
      this.size --  
      var val = this.storage[this.size]
      delete this.storage[this.size]
      return val;

    } else {
      return true;
    }
  },

  size: function() {
    return this.size;
  }



