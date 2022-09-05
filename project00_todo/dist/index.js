"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
let todoList = [
    new TodoItem_1.TodoItem(1, 'Buy Flowers'),
    new TodoItem_1.TodoItem(2, 'Todo 2'),
    new TodoItem_1.TodoItem(3, 'Todo 3'),
    new TodoItem_1.TodoItem(4, 'Todo 4'),
    new TodoItem_1.TodoItem(5, 'Todo 5'),
];
let collection = new TodoCollection_1.TodoCollection("Qasim", todoList);
console.clear();
console.log(`${collection.userName}'s Todo List` +
    `[${collection.getItemCounts().incomplete} items todo]`);
let newId = collection.addTodo('Go for run');
let todoItem = collection.getTodoById(newId);
collection.markComplete(newId);
/*
if(todoItem){
    todoItem.print();
}
*/
collection.getTodoItems(true).forEach(item => item.print());
console.log('Removing completed Items');
collection.removeCompleted;
collection.getTodoItems(false).forEach(item => item.print());
//collection.getTodoItems(true).forEach(item => item.print());
