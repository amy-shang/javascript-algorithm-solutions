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
    let sum = (BigInt(a1.split("").reverse().join("")) + BigInt(a2.split("").reverse().join(""))).toString().split("").reverse().join("");
    let ne = new ListNode(sum.charAt(0));
    let temp = ne;
    for(let i=1;i<sum.length;i++){
        temp.next = new ListNode(sum.charAt(i));
        temp = temp.next;
    }
    return ne;
    
};
