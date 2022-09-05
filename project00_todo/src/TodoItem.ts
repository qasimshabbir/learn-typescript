//defining a data model for our class
//It will contain id, task and flag to mention that it was complete or not
//It also had a method to print task
export class TodoItem{
    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(
        id: number,
        task: string,
        complete: boolean = false
    ){
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    public print(){
        console.log(`${this.id}\t${this.task} ${this.complete?"\tCompleted":""}`);
    }
}