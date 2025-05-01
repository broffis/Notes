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

# 2-20-2025

## The Last Algorithms Course You'll Need

### Search

#### Pseudo Code Binary Search

search(arr, lo, hi, needle)

midpoint = floor(lo + (hi-lo)/2)

val = arr[midpoint]

if (val = needle) return true
else if (v > midpoint) lo = midpoint + 1
else hi = midpoint

- Low is always inclusive, High is always exclusive
  - This is why we always add one to Low, but just set for High
- For any of this to work, the array **MUST BE SORTED**

#### Implementing Binary Search

#### Two Crystal Balls Problem

Problem:
Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way

Solution:
Jump √N until one breaks, then walk forward from last known non-break in linear fashion. Now it's O(√N)

#### Implementing Two Crystal Balls Problem

# 3-7-2025

## The Last Algorithms Course You'll Need

### Sort

#### Bubble Sort

- Each iteration of a bubble sort returns the highest value in the last position
  - Next iteration does not include final last iteration length
- Running time is (n(n+1))/2 => O(n^2)
  - drop constant => (n^2 + n)
  - drop insignificant value (+n) => n^2

#### Implement Bubble Sort

#### Linked List Data Structures

- Node based data structure
  - There is no index, you use .next() to move through
- Insertion is O(I)
  - speed is not dependent on value or size inserted
  - setting .next() and .prev() references happen constantly and at the same time
- Deletion is harder O(4I) => O(I)
  - speed is not dependent on value or size removed
  - setting .next() and .prev() happen constantly and at the same time

#### Linked List Complexity

#### Queue

- Specific implementation of a LinkedList
  - FIFO structure
- Speed is 2O(I)
  - Adding/removing from a queue requires 2 operations

#### Implementing a Queue

#### Stack

- Backwards queue
  - Think of it like a bunch of things stacked up
  - "Stack" Trace for errors
  - Last In, First Out

#### Implementing a Stack

# 5-1-2025

## The Last Algoritms Course You'll Ever Need

### Recursion

#### Recursion

- What is recursion: A function that calls itself
  - eventually reaches "base case" that no longer needs to call itself
- Three steps in recursion:
  1. pre
  2. recurse
  3. post
