/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Todo} from '../interfaces/todo';
let store = new Map < string, Array < Todo >> ();
/* beautify ignore:end */

@Injectable()
export class TodoStore {
    todos: Array < Todo > ;
    constructor() {
        this.todos = store.get('angular2-todos') || [];
    }
    _updateStore() {
        store.set('angular2-todos', this.todos);
    }
    get(state: {
        completed: Boolean
    }) {
        return this.todos.filter((todo: Todo) => todo.completed === state.completed);
    }
    select(todo: Todo, selected: Boolean) {
        this.resetAll();

        todo.selected = selected;
        this._updateStore();
    }
    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
        this._updateStore();
    }
    remove(todo: Todo) {
        this.resetAll();

        this.todos.splice(this.todos.indexOf(todo), 1);
        this._updateStore();
    }
    startEditing(todo: Todo) {
        this.resetAll();

        todo.editing = true;
    }
    finishEditing(todo: Todo, newTitle: string) {
        this.resetAll();

        todo.title = newTitle;
        todo.editing = false;
    }
    add(title: String, completed: Boolean = false) {
        this.resetAll();

        this.todos.push(new Todo(title, completed));
        this._updateStore();
    }

    private resetAll() {
        this.todos.forEach((t) => {
            t.selected = false;
            t.editing = false;
        });
    }
}
