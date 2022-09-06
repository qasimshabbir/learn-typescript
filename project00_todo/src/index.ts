import {TodoItem} from './TodoItem';
import {TodoCollection} from './TodoCollection';
import inquirer from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
let todoList = [
    new TodoItem(1,'Buy Flowers'),
    new TodoItem(2, 'Todo 2'),
    new TodoItem(3, 'Todo 3'),
    new TodoItem(4, 'Todo 4'),
    new TodoItem(5, 'Todo 5'),
];

let collection = new TodoCollection("Qasim",todoList);


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
enum Commands{
    Toggle= "Show / Hide Completed",
    Add = "Add new task",
    Complete = "Complete Task",
    Purge = "Remove Completed Task",
    Quit = "Quit"
}

function displayTodoList(showAll:boolean = true): void{
    console.log(
        `${collection.userName}'s Todo List`+
        `[${collection.getItemCounts().incomplete} items todo]`
    );
    collection.getTodoItems(showAll).forEach(item => item.print());
}
async function promptAdd(){
    console.clear();
    const answers = await inquirer.prompt({
        type: 'input',
        name: 'add',
        message: 'Enter Task: '
    })
    if(answers["add"] !== ""){
        collection.addTodo(answers["add"]);
        promptUser();
    }
    
}

async function promptMarkComplete(){
    console.clear();
    const answers = await inquirer.prompt({
        type: 'checkbox',
        name: 'complete',
        message: 'Mark Task Complete: ',
        choices: collection.getTodoItems(showCompleted)
            .map(item=>({
                name: item.task,
                value: item.id, 
                checked: item.complete
                })
            )
    })
    if(answers["complete"] !== ""){
        let completedTask = answers["complete"] as number[];
        collection.getTodoItems(true)
                    .forEach(item=>
                        collection.markComplete(
                            item.id,
                            completedTask.find(id=>id===item.id)!=undefined
        ));
        promptUser();
    }
}

async function promptUser(){
    console.clear();
    displayTodoList(showCompleted);
    const answers = await inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    })
    switch(answers["command"]){
        case Commands.Toggle:
            showCompleted=!showCompleted;
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