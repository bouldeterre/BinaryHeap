"use strict";

/**
 * Implementation of binaryHeap.
 *
 * @constructor
 * @this {BinaryHeap}
 * @param {number} _length The desired total length of the heap.
 */
class BinaryHeap {
  constructor(_length) {
    if (_length === undefined) _length = Infinity;
    this.maxlenth = _length;

    this.size = 0;
    this.data = {};
  }

  /**
   * Push a new value into the tree.
   *
   * @param {number} value The desired value to be added in the tree.
   */
  push(value) {
    this.size++;
    let index = this.size - 1;
    this.data[index] = value;
    while (index != 0 && this.data[this.parent(index)] > this.data[index]) {
      let temp = this.data[index];
      this.data[index] = this.data[this.parent(index)];
      this.data[this.parent(index)] = temp;
      index = this.parent(index);
    }

    if (this.size > this.maxlenth) this.extractMin();
  }

  /**
   * Remove and return the minimum element of the tree
   *
   *
   */
  extractMin() {
    if (this.size <= 0) return;
    if (this.size === 1) {
      this.size--;
      return this.data[0];
    }
    let root = this.data[0];
    this.data[0] = this.data[this.size - 1];
    this.size--;
    this.MinHeapify(0);
    return root;
  }

  /**
   * Re-order after removing the root of the tree
   *
   *
   */
  MinHeapify(index) {
    let left = this.left(index);
    let right = this.right(index);
    let smallest = index;
    if (left < this.size && this.data[left] < this.data[index]) smallest = left;
    if (right < this.size && this.data[right] < this.data[smallest])
      smallest = right;
    if (smallest != index) {
      let temp = this.data[index];
      this.data[index] = this.data[smallest];
      this.data[smallest] = temp;
      this.MinHeapify(smallest);
    }
  }

  /**
   *  return the lowest element of the tree
   *
   *
   */
  lower() {
    return this.data[0];
  }

  /**
   *  compute the parent index of a node
   *
   * @param {number} index Index of the node.
   */
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   *  compute the left-leaf index of a node
   *
   * @param {number} index Index of the node.
   */
  left(index) {
    return Math.floor(2 * index + 1);
  }

  /**
   *  compute the right-leaf index of a node
   *
   * @param {number} index Index of the node.
   */
  right(index) {
    return Math.floor(2 * index + 2);
  }
}

module.exports = BinaryHeap;
