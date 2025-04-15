import { Component, OnInit } from '@angular/core';
import { IUser } from '../cart/user/user.model';
import { UserService } from '../cart/user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  standalone: false
})

export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => { this.user = user }
    });
  }


  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    console.log( 'HEADER - signing out')
    this.userService.signOut();
    this.showSignOutMenu = false;
  }

}
