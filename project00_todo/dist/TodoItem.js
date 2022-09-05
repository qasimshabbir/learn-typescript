"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//defining a data model for our class
//It will contain id, task and flag to mention that it was complete or not
//It also had a method to print task
class TodoItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    print() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\tCompleted" : ""}`);
    }
}
exports.TodoItem = TodoItem;
