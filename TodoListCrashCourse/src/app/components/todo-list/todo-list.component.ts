import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[]; 

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
      id: 1,
      title: 'Todo One',
      completed: false
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: true
    },
    {
      id: 3,
      title: 'Todo Three',
      completed: false
    },
  ]
  }

}
