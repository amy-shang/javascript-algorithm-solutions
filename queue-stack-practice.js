// array push pop act like stack
// array unshift shift act like queue

// linear data structure
// stack remove latest changed data
// queue remove the oldest data 

// minimum value
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


// console.log([1,2,3].min());
// console.log([1,2,3].max());

// 1. Stack is LIFO (Last In First Out)
// 2. Queue is FIFO (First In First Out)

function Stack(){
	var storage = [];
	this.push = function(){
		return storage.push.apply(storage, arguments);
	};
	this.pop = function(){
		return storage.pop.apply(storage, arguments);
	};
	this.sort = function(){
		return storage.sort.apply(storage, arguments);
	}
	this.size = function(){
		return storage.length;
	}
	this.peek = function(){
		return storage
	}
}
function Queue(){
	var inbox = new Stack();
	var outbox = new Stack();
	this.enqueue = function(){
		return inbox.push.apply(inbox,arguments);
	};
	this.dequeue = function(){
		if (outbox.size()===0) {
			while (inbox.size()) {
				outbox.push(inbox.pop());
			};
		};
		return outbox.pop();	
	};
	this.size = function(){
		return inbox.size()+outbox.size();
	};
	this.peek = function(){
		return outbox.peek();
	}
}
var stackA = new Stack();
stackA.push('c','a','b');
stackA.sort();
console.log(stackA.peek());

// var queueA = new Queue();
// queueA.enqueue(1,2,3,4,5);
// queueA.dequeue();
// console.log(queueA.peek());
// console.log(queueA.size());
