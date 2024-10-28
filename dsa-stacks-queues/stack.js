/** Node: represents a node in a stack, containing a value and a reference to the next node. */

class Node {
  constructor(val) {
    this.val = val;  // Store the value of the node.
    this.next = null;  // Reference to the next node in the stack (initialized to null).
  }
}


/** Stack: a data structure following the LIFO (Last In, First Out) principle.
 *  You can add (push) or remove (pop) nodes only from the top of the stack.
 */
class Stack {
  constructor() {
    this.first = null;  // Points to the top (first) node in the stack.
    this.last = null;   // Points to the bottom (last) node in the stack.
    this.size = 0;      // Keeps track of the number of nodes in the stack.
  }

  /** push(val): add a new node with the given value to the top of the stack. */

  push(val) {
    let node = new Node(val);  // Create a new node with the given value.

    // If the stack is empty, the new node becomes both the first (top) and last (bottom) node.
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      // Otherwise, the new node is placed on top, and its "next" points to the previous first node.
      let tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    this.size++;  // Increment the size of the stack.
  }

  /** pop(): remove and return the top node from the stack.
   * Throws an error if the stack is empty.
   */

  pop() {
    if (!this.first) throw new Error("Can't pop from an empty stack.");  // Error if the stack is empty.

    let temp = this.first;  // Temporarily store the top node.

    // If the stack has only one node, set the last node to null as well.
    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;  // Move the first pointer to the next node in the stack.
    this.size--;  // Decrement the size of the stack.
    return temp.val;  // Return the value of the removed node.
  }

  /** peek(): return the value of the top node in the stack without removing it. */

  peek() {
    return this.first.val;  // Return the value of the top node.
  }

  /** isEmpty(): return true if the stack is empty, otherwise false. */

  isEmpty() {
    return this.size === 0;  // Check if the size is zero, indicating an empty stack.
  }
}

module.exports = Stack;
