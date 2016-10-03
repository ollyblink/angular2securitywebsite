import {Component, OnInit} from '@angular/core'
import {LogoutService} from "./logout.service";

@Component(
  {
    selector: "logout",
    templateUrl: 'app/logout/logout.component.html',
    styleUrls: ['app/logout/logout.component.css'],
    providers: [LogoutService]
  }
)
export class LogoutComponent implements OnInit {
  message: string;

  constructor(private logoutService: LogoutService) {

  }

  public logout(): void {
    this.logoutService.logout().then(message => this.message = message);
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.logout();
      localStorage.removeItem('user');
    }
  }
}
