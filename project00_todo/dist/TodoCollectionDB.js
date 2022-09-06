"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollectionDB = void 0;
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class TodoCollectionDB extends TodoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.db = lowdb(new FileSync("Todo.json"));
        if (this.db.has("tasks").value()) {
            let dbItems = this.db.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new TodoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.db.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    add(task) {
        let result = super.addTodo(task);
        this.store();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.store();
    }
    removeCompleted() {
        super.removeCompleted();
        this.store();
    }
    store() {
        this.db.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.TodoCollectionDB = TodoCollectionDB;
