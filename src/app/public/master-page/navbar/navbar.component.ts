import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: Boolean = false;
  rol: number = 1;
  subscription: Subscription;

  constructor(private service: SecurityService) { }

  ngOnInit(): void {
    this.subscription = this.service.getRegistroData().subscribe(
      data => {
        this.isLogged = data.isLogged
      }
    )
  }

}
