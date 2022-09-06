"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const inquirer_1 = require("inquirer");
let todoList = [
    new TodoItem_1.TodoItem(1, 'Buy Flowers'),
    new TodoItem_1.TodoItem(2, 'Todo 2'),
    new TodoItem_1.TodoItem(3, 'Todo 3'),
    new TodoItem_1.TodoItem(4, 'Todo 4'),
    new TodoItem_1.TodoItem(5, 'Todo 5'),
];
let collection = new TodoCollection_1.TodoCollection("Qasim", todoList);
console.clear();
let newId = collection.addTodo('Go for run');
let todoItem = collection.getTodoById(newId);
collection.markComplete(newId);
/*
if(todoItem){
    todoItem.print();
}
*/
//collection.getTodoItems(true).forEach(item => item.print());
let showCompleted = true;
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show / Hide Completed";
    Commands["Add"] = "Add new task";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Completed Task";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function displayTodoList(showAll = true) {
    console.log(`${collection.userName}'s Todo List` +
        `[${collection.getItemCounts().incomplete} items todo]`);
    collection.getTodoItems(showAll).forEach(item => item.print());
}
async function promptAdd() {
    console.clear();
    const answers = await inquirer_1.prompt({
        type: 'input',
        name: 'add',
        message: 'Enter Task: '
    });
    if (answers["add"] !== "") {
        collection.addTodo(answers["add"]);
        promptUser();
    }
}
async function promptMarkComplete() {
    console.clear();
    const answers = await inquirer_1.prompt({
        type: 'checkbox',
        name: 'complete',
        message: 'Mark Task Complete: ',
        choices: collection.getTodoItems(showCompleted)
            .map(item => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        }))
    });
    if (answers["complete"] !== "") {
        let completedTask = answers["complete"];
        collection.getTodoItems(true)
            .forEach(item => collection.markComplete(item.id, completedTask.find(id => id === item.id) != undefined));
        promptUser();
    }
}
async function promptUser() {
    console.clear();
    displayTodoList(showCompleted);
    const answers = await inquirer_1.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    });
    switch (answers["command"]) {
        case Commands.Toggle:
            showCompleted = !showCompleted;
            promptUser();
            break;
        case Commands.Add:
            promptAdd();
            break;
        case Commands.Complete:
            promptMarkComplete();
            break;
        case Commands.Purge:
            collection.removeCompleted();
            promptUser();
            break;
        case Commands.Quit:
            return;
    }
}
promptUser();
