// Fundamentally, the difference between DFS and BFS is 
// that with a DFS you push the children of the current node onto a stack, 
// so they will be popped and processed before everything else, 
// while for BFS you push the children onto the end of a queue, 
// so they will be popped and processed after everything else.

// DFS is easy to implement recursively
// because you can use the call stack as the stack. 
// You can't do that with BFS, because you need a queue. 

// Here are the steps: 

// Immediately invoke recurse with the root node of a tree as its argument. 
// At this moment, currentNode points to the current node. 
// Enter a for loop and iterate once for each child of currentNode, beginning with the first child. 
// Inside the body of the for loop, invoke recurse with a child of currentNode. 
// The exact child depends on the current iteration of the for loop. 
// When currentNode no longer has children, we exit the for loop and invoke the callback 
// we passed during the invocation of traverseDF(callback). 
// Steps 2 (self-terminating), 3 (self-invoking), and 4 (callback) repeat 
// until we traverse every node of a tree. 
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}
 
function Tree(data) {
    var node = new Node(data);
    this._root = node;
}
 
Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
 
        // step 1
    })(this._root);
 
};
 
Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
 
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};
 
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};
 
Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};
 
Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};
 
function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}
var tree = new Tree('CEO');
//console.log(tree);
tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);
// tree.traverseBF(function(node) {
//     console.log(node.data)
// });
//console.log(tree);
tree.add('Director of Puppies', 'VP of Finance', tree.traverseDF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseDF);
//console.log(tree);
tree.traverseDF(function(node) {
    console.log(node.data)
});
console.log(tree._root.children);
