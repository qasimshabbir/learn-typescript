import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./TodoCollection";
import * as lowdb from "lowdb";
import * as FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    tasks: {
        id:number; 
        task: string; 
        complete: boolean
    }[]
}

export class TodoCollectionDB extends TodoCollection{
    private db: lowdb.LowdbSync<schemaType>;
    
    constructor(public userName: string, todoItems: TodoItem[]=[]){
        super(userName,[]);
        this.db = lowdb(new FileSync("Todo.json"));
        if(this.db.has("tasks").value()){
            let dbItems = this.db.get("tasks").value();
            dbItems.forEach(item=> this.itemMap.set(
                item.id,
                new TodoItem(item.id,item.task,item.complete))
            );
        }else{
            this.db.set("tasks",todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id,item));
        }
    }

    add(task:string): number{
        let result = super.addTodo(task);
        this.store();
        return result;
    }
    markComplete(id: number, complete?: boolean): void {
        super.markComplete(id,complete);
        this.store();
    }
    removeCompleted(): void {
        super.removeCompleted();
        this.store();
    }
    private store(){
        this.db.set("tasks",[...this.itemMap.values()]).write();
    }
}
