import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../mocks/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users:User[] = DUMMY_USERS;
  selectedUser?:User = undefined;

  handleSelectedUser(id: string) {
    this.selectedUser = this.users.find((u) => u.id === id);
  }
}
