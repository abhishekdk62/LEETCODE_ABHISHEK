var mergeNodes = function(head) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let sum = 0;
    head = head.next; // skip initial 0
    
    while (head) {
        if (head.val === 0) {
            curr.next = new ListNode(sum);
            curr = curr.next;
            sum = 0;
        } else {
            sum += head.val;
        }
        head = head.next;
    }
    
    return dummy.next;
};
