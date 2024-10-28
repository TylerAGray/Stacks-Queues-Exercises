/** Node: represents a node in a queue, containing a value and a reference to the next node. */

class Node {
  constructor(val) {
    this.val = val;  // Store the value of the node.
    this.next = null;  // Reference to the next node in the queue (initialized to null).
  }
}


/** Queue: a linked list structure where nodes are added to the back 
 *  (enqueue) and removed from the front (dequeue).
 */
class Queue {
  constructor() {
    this.first = null;  // Points to the first node in the queue.
    this.last = null;   // Points to the last node in the queue.
    this.size = 0;      // Keeps track of the number of nodes in the queue.
  }

  /** enqueue(val): add a new node with the given value to the end of the queue. */
  
  enqueue(val) {
    let node = new Node(val);  // Create a new node with the given value.

    // If the queue is empty, the new node becomes both the first and last node.
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      // Otherwise, add the new node to the end and update the last pointer.
      this.last.next = node;
      this.last = node;
    }

    this.size++;  // Increment the size of the queue.
  }

  /** dequeue(): remove the first node from the queue and return its value.
   * Throws an error if the queue is empty.
   */
  
  dequeue() {
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");  // Error if queue is empty.

    let temp = this.first;  // Temporarily store the current first node.
    
    // If there's only one node in the queue, set last to null as well.
    if (this.first == this.last) {
      this.last = null;
    }
    
    this.first = this.first.next;  // Move the first pointer to the next node.
    this.size--;  // Decrement the size of the queue.
    return temp.val;  // Return the value of the removed node.
  }

  /** peek(): return the value of the first node in the queue without removing it. */
  
  peek() {
    return this.first.val;  // Return the value of the first node.
  }

  /** isEmpty(): return true if the queue has no nodes, otherwise false. */
  
  isEmpty() {
    return this.size === 0;  // Check if the size is zero.
  }
}

module.exports = Queue;

