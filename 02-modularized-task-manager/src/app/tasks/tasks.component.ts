import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  toggleIsAddingTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}
