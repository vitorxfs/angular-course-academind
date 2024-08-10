import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();

  // Another way of injecting dependencies in angular besides constructors
  private taskService = inject(TasksService);

  // It's possible to use signals as well
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  handleCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);

    this.close.emit();
  }
}
