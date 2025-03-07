type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // Add to queue
    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        // Empty queue
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // Add value to queue at the current end
        this.tail.next = node;

        // Set the new end
        this.tail = node;
    }

    // Remove from queue
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // free  (garbage collection)
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    // See next value returned without mutating it
    peek(): T | undefined {
        return this.head?.value;
    }
}
