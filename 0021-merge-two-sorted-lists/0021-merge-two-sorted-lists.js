/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy=new ListNode(-1)
    let cur=dummy
    while(list1!=null&&list2!=null)
    {
        if(list1.val>list2.val)
        {
            cur.next=list2
            list2=list2.next
        }else
        {
            cur.next=list1
            list1=list1.next
        }
        cur=cur.next
    }
    if(list1==null) cur.next=list2
    if(list2==null) cur.next=list1
    return dummy.next
};