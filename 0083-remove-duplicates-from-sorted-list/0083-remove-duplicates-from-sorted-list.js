/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    let seen = new Set()

    let cur = head
    if(!head) return head
    let prev = null
    let mark=0
    while (cur) {
        
        if (seen.has(cur.val)) {
            prev.next = cur.next
                        cur = cur.next        // ← CHANGED: move cur here after deletion
            continue;             // ← CHANGED: prevent prev from moving for duplicates

         
        }

        prev = cur
        seen.add(cur.val)
        cur = cur.next
    }
    return head
};