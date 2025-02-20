# 2-7-2025

## The Last Algorithms Course You'll Need

### Basics

#### Big O Time Complexity

Running time for the following is O(n):

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Running time of the following is O(2n) which is the same as O(n):

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Running time of the following is still O(N)

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
}
```

We always drop all constants when calculating Big O time complexity.

##### Important Concepts

1. Growth is with respect to the size of the input
2. We drop all constants
3. Worst case is _usually_ the way we measure time complexity

##### Some more examples

###### O(N^2)

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(j);
    }
  }

  return sum;
}
```

###### O(N^3) (multiplying matrices)

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        sum += n.charCodeAt(j);
      }
    }
  }

  return sum;
}
```

###### O(n log n)

- Quick sort

###### O(log N)

- Binary search

#### Arrays Data Structure

- Arrays are contiguous blocks of memory. This means that the elements are stored one after the other in memory.

```javascript
const a = new ArrayBuffer(6);
const a8 = new Uint8Array(a);
a8[0] = 45;
console.log(a); // ArrayBuffer { [Uint8Content: <2d 00 00 00 00 00>, byteLength: 6 }

a8[2] = 45;
console.log(a); // ArrayBuffer { [Uint8Content: <2d 00 2d 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
console.log(a16); // ArrayBuffer { [Uint8Content: <2d 00 2d 00 00 00>, byteLength: 6 }

const a16[2] = 0x4545;

console.log(a); // ArrayBuffer { [Uint8Content: <2d 00 2d 00 45 45>, byteLength: 6 }
```

#### Arrays Q&A

n/a

#### Learning Lab Discussion

# 2-20-2025

## The Last Algorithms Course You'll Need

### Search

#### Linear Search and Kata Setup

Algorithms
The A in DSA

Clone Kata repo and did LinearSearchList

#### Binary Search Algorithm

Another Big O trick - If the input halves at each step, its likely O(LogN) or O(NlogN)
