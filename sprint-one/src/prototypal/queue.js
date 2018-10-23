var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var queue = Object.create(queueMethods);
	queue.storage = {};
	queue.leg = 0;
	queue.counter = 1;
	return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.leg++
	this.storage[this.leg] = value;
};
queueMethods.dequeue = function (){
	var del = this.storage[this.counter];
		delete this.storage[this.counter];
	this.counter++
	return del;
}
queueMethods.size = function () {
	var a = Object.keys(this.storage).length;
	return a
}

