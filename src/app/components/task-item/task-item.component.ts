import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;
  @Input() task:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete = (task) => {
    this.onDeleteTask.emit(task);
  }

  onToggle = task => {
    this.onToggleReminder.emit(task);
  }
}
