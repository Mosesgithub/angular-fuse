let todoId = 0;
export class Todo {
    selected: Boolean = false;
    completed: Boolean = false;
    editing: Boolean = false;
    title: String;
    uid: String;
    setTitle(title: String) {
        this.title = title.trim();
    }
    constructor(title: String, completed: Boolean = false) {
        this.uid = 'todo ' + (++todoId);
        this.title = title.trim();
        this.completed = completed;
    }
}
