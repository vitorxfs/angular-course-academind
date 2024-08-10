import { Component, EventEmitter, Input, output, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Signal approach
  // Be sure to call the signal values calling them as function (this.avatar() instead of this.avatar)

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // The output with no decorators still uses emmitters, but makes code more consistent when using signals
  // select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
