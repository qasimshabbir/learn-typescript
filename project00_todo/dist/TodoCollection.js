"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map(); //generics
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter(//used js spread operator
        //used js spread operator
        item => includeComplete || !item.complete);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        //this.todoItems.push(new TodoItem(this.nextId,task));
        this.itemMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    markComplete(id, complete = true) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    //removing completed items
    removeCompleted() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    //returning item counts
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TodoCollection = TodoCollection;
