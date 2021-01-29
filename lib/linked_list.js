// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.head = newNode;
            //console.log('newHead' + this.head.val)
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        console.log(this.tail.value);

        this.length++;
        //console.log('this' + this.head.val);
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.length){
            return;
        }
        let oldNode;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let nextEle = this.head;
            for (let i = 0; i < this.length - 2; i++) {
                nextEle = nextEle.next;
            }
            oldNode = nextEle.next;
            nextEle.next = null;
            this.tail = nextEle
        }
        this.length--;

        return oldNode
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        let oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;

        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

const linkedList = new LinkedList()
linkedList.addToTail('A')
linkedList.addToTail('B')
linkedList.addToTail('C')
linkedList.addToTail('D')

linkedList.removeTail();
exports.Node = Node;
exports.LinkedList = LinkedList;
