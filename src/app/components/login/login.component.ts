import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSignedIn = false

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })

    if(localStorage.getItem('user')!== null)
      this.isSignedIn= true
    else
      this.isSignedIn = false
  }

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.router.navigate(['create'])
  }

  //------------------
  get getControl() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value)
    // if (this.form.invalid) {
    //   return
    // }
    // const user: User = {
    //   email: this.form.value.email,
    //   password: this.form.value.password,
    //   returnSecureToken: true
    // }
    //
    // this.auth.login(user).subscribe(() => {
    //   this.form.reset();
    //
    //   this.router.navigate(['create'])
    // })
    //
    this.router.navigate(['create'])


  }

  btnClick() {
    this.router.navigate(['sign-in'])
  }
}
