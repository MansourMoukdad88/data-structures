class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
	this.leg = 0;
	this.counter = 1;
  }
enqueue(value){
	this.leg++
	this.storage[this.leg] = value;
};
dequeue(){
	var del = this.storage[this.counter];
		delete this.storage[this.counter];
	this.counter++
	return del;
}
size(){
	var a = Object.keys(this.storage).length;
	return a
}
}
var a = new Queue()
