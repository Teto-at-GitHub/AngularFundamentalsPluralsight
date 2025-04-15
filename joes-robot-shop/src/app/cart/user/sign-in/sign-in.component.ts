import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: false
})
export class SignInComponent {

  credentials: IUserCredentials = {
    email: 'your email',
    password: ''
  }

  constructor() { }


}
