/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers2 = (l1, l2) => {
let node = new ListNode(), copy = node
    let digits = 0, carry = 0
    
    while(l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        digits = sum % 10
        carry = Math.floor(sum / 10)
        
        node.next = new ListNode(digits)
        node = node.next
        
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    
    if(carry > 0) node.next = new ListNode(carry)
    
return copy.next
    
};
var addTwoNumbers = function(l1, l2) {
    let s1 = '', s2 = '';
    while(l1){
        s1 += l1.val;
        l1 = l1.next;
    }
    while(s2){
        s2 += l2.val;
        l2 = l2.next;
    }
    let sum = (BigInt(s1.split("").reverse().join("")) + BigInt(s2.split("").reverse().join(""))).toString().split("").reverse().join("");
    let ne = new ListNode(sum.charAt(0));
    let temp = ne;
    for(let i=1;i<sum.length;i++){
        temp.next = new ListNode(sum.charAt(i));
        temp = temp.next;
    }
    return ne;
    
};
