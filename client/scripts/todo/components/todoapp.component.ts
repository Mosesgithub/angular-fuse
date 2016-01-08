/* beautify ignore:start */
import {Component} from 'angular2/core';
import {TodoStore} from '../services/todo.store';
import {Todo} from '../interfaces/todo';
/* beautify ignore:end */

@Component({
    selector: 'app',
    providers: [TodoStore],
    //directives: [Login],
    template: require('./todoapp.component.html')
})

export class TodoAppComponent {
    private todoStore: TodoStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.todoStore.add('item 1', true);
        this.todoStore.add('item 2', false);
    }

    addNew(eventData) {
        this.todoStore.add('new task', false);
    }

    toggleSelected(todo: Todo) {
        console.log('Selecting: ' + todo.title);
        this.todoStore.select(todo, !todo.selected);
    }

    toggleCompletion(todo: Todo) {
        console.log('toggleCompletion: ' + todo.completed);
        this.todoStore.toggleCompletion(todo);
    }

    delete(todo: Todo) {
        this.todoStore.remove(todo);
    }

    edit(todo: Todo) {
        this.todoStore.startEditing(todo);
    }

    finishEditing(todo: Todo, newTitle: string) {
        this.todoStore.finishEditing(todo, newTitle);
    }
}
