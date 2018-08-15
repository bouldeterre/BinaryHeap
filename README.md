# BinaryHeap

[![npm version](https://badge.fury.io/js/mybinaryheap.svg)](https://www.npmjs.com/package/mybinaryheap)

[![npm version](https://img.shields.io/npm/dt/mybinaryheap.svg)](https://www.npmjs.com/package/mybinaryheap)

This is a simple BinaryHeap heap Implementation in nodejs, without dependencies

| Functions | Average | Worst case |
| --------- | :-----: | ---------: |
| push      |  O(1)   |   O(log n) |
| lower     |  O(1)   |       O(1) |

## 🗃️Pre-Requisites

* node https://nodejs.org/en

## 🛠️ Usage

```
let BinaryHeap = require("mybinaryheap");

let binaryHeap = new BinaryHeap(2); // limit is set to 2 elements
binaryHeap.push(2);
binaryHeap.push(1);
binaryHeap.push(3);
console.log(binaryHeap.lower()); //  "2"
```

## Contributing

### ⚠️ Tests

```bash
npm install
npm run test
```

### 🗃️ Docs

```bash
npm run doc
```

=]
