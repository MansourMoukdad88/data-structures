var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size ++;
    storage[size] = value;
   //  console.log("add",size)
    
  };

  someInstance.dequeue = function() {

    var deleted = storage[counter]
     
     delete storage[counter]
     counter ++;
     return deleted

     
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
