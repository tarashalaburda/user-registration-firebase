import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private firebaseService : FirebaseService ) {
  }

  ngOnInit(): void {
  }

  logout() {
    // event.preventDefault();
    this.firebaseService.logout()
        this.router.navigate([''])
  }

}
