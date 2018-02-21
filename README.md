# BinaryHeap

This is a simple BinaryHeap heap Implementation in nodejs, without dependencies

| Functions | Average | Worst case |
| --------- | :-----: | ---------: |
| push      |  O(1)   |   O(log n) |
| lower     |  O(1)   |       O(1) |

## 🗃️Pre-Requisites

* node https://nodejs.org/en

## 🛠️ Usage

```
let BinaryHeap = require("./binaryHeap.js");
let binaryHeap = new BinaryHeap(2); // limit is set to 2 elements

binaryHeap.push(2);
binaryHeap.push(1);
binaryHeap.push(3);
binaryHeap.lower() // return 2
```

## ⚠️ Tests

A minimal of packages are required for running tests.

```bash
npm install
npm run test
```

## 🗃️ Docs

JSDoc are generated in ./doc

```bash
npm run doc
```

=]
