import { TodoItem } from './TodoItem';


//Creating a class that will collect together
//the TodoItems so the can be managed more easily


//creating object to provide counts
type ItemCounts = {
    total: number,
    incomplete: number
}
export class TodoCollection{
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>(); //generics

    constructor(
        public userName: string, 
        public todoItems: TodoItem[] = []
    ){
        todoItems.forEach(item => this.itemMap.set(item.id,item));
    }

    getTodoById(id: number): TodoItem|undefined{
       return this.itemMap.get(id);
    }

    getTodoItems(includeComplete: boolean): TodoItem[]{
        return [...this.itemMap.values()].filter( //used js spread operator
            item => includeComplete || !item.complete
        );
    }

    addTodo(task: string): number{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        //this.todoItems.push(new TodoItem(this.nextId,task));
        this.itemMap.set(this.nextId,new TodoItem(this.nextId,task));
        return this.nextId;
    }

    markComplete(id: number, complete: boolean=true){
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete=complete;
        }
    }
    //removing completed items
    removeCompleted(){
        this.itemMap.forEach(item => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    //returning item counts
    getItemCounts(): ItemCounts{
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}