import {TodoItem} from './TodoItem';
import {TodoCollection} from './TodoCollection';

let todoList = [
    new TodoItem(1,'Buy Flowers'),
    new TodoItem(2, 'Todo 2'),
    new TodoItem(3, 'Todo 3'),
    new TodoItem(4, 'Todo 4'),
    new TodoItem(5, 'Todo 5'),
];

let collection = new TodoCollection("Qasim",todoList);


console.clear();
console.log(
    `${collection.userName}'s Todo List`+
    `[${collection.getItemCounts().incomplete} items todo]`
);

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
collection.removeCompleted
collection.getTodoItems(false).forEach(item => item.print());
//collection.getTodoItems(true).forEach(item => item.print());