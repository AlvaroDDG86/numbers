import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.signInWithGoogle().then((res) => {
      this.router.navigate(['codigos']);
   }).catch((err) => {
     console.log('error: ' + err);
   }
   );
  }
}
