// A FIFO (first in first out) collection
// class Queue {
//   data = [];
//   push(item) {
//     this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }
//
// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//   pop(): number {
//     return super.pop();
//   }
// }
//
// const queue = new NumberQueue();
// queue.push(123);
// queue.push("hello world");
//
// console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1));

// generics
class QueueGenerics<T> {
  data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}
const queueGenerics = new QueueGenerics<number>();
queueGenerics.push(123);
// queueGenerics.push("hello world"); // error
queueGenerics.push(456);

console.log(queueGenerics.pop()?.toPrecision(1));
console.log(queueGenerics.pop()?.toPrecision(1));
