
var Queue = function() {
  var queue = {
    storage:{},
    len:0,
    counter:1
  }
  _.extend(queue, queueMethods);

  return queue;
}


var queueMethods = {}

queueMethods.enqueue = function(value) {
    this.len++;
    this.storage[this.len] = value;   
    console.log(this.len)
  };
queueMethods.dequeue = function() {

    var deleted = this.storage[this.counter]
     
     delete this.storage[this.counter]
     this.counter ++;
     return deleted

  };
  queueMethods.size = function() {
    var length = Object.keys(this.storage).length;
    return length
  };




























