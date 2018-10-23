class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.leg = 0;
  }
  	push(value){
	    this.storage[this.leg] = value;
        this.leg++;
	}
	pop() {
    if(this.leg > 0) {
      this.leg --  
      var val = this.storage[this.leg]
      delete this.storage[this.leg]
      return val;

    } else {
      return true;
    }
  }
  size () {
        return this.leg;
    }

}
var Some = new Stack()