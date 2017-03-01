// a linkedlist has nodes, each node has a value and pointer to next

function Linkedlist(){
	this.head = null
}
Linkedlist.prototype.push = function(data) {
	var node = {
		value: data,
		next: null
	};
	if (!this.head) {
		this.head = node;
	}else{
		var current = this.head;
		while (current.next) {
			current = current.next
		};
		current.next = node;
	};
};
Linkedlist.prototype.remove = function(data){
	var current = this.head;
	if (current.value == data) {
		this.head = current.next;
	}else{
		var cursor = current;
		current = current.next
		while(current){
			if (current.value == data) {
				cursor.next = current.next;
				current = current.next
				break
			};
			cursor = current;
			current = current.next;
		}
		// if (current.next.value == data) {
		// 	cursor.next = null;
		// };
	}
}
function findNthNodesToEnd(linkedlist, nth){
	if (!linkedlist || !linkedlist.head) return;
	var current = linkedlist.head;
	var stack = [];
	var count = 0;
	while(current) {
		if (count >= nth) {
			stack.push(current);			
			break
		};
		current = current.next;
		count ++ ;
	};
	//if (stack.length <= nth) return null;
	return stack
}
function removeDuplicateNodes(linkedlist){
	if (!linkedlist || !linkedlist.head) return;
	var p1 = linkedlist.head;
	var p2 = p1.next;
	var hash = {};
	hash[p1.value] = true;
	while(p2){
		var data = p2.value;
		if (hash[data]) {
			p1.next = p2.next
		}else{
			hash[data] = true;
			p1 = p2;
		};
		p2 = p2.next;
	}
}

var linkedlist = new Linkedlist();
linkedlist.push(1);
linkedlist.push(2);
linkedlist.push(3);
linkedlist.push(4);
linkedlist.push(3);
// linkedlist.push(5);
// linkedlist.push(6);
console.log(JSON.stringify(linkedlist));
// linkedlist.remove(2);
// console.log(JSON.stringify(linkedlist));

//console.log(findNthNodesToEnd(linkedlist,1));
removeDuplicateNodes(linkedlist);
console.log(JSON.stringify(linkedlist));
