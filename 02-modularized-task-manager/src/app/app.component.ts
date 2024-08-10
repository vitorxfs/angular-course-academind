import { Component } from '@angular/core';

import { DUMMY_USERS } from '../mocks/dummy-users';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
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
