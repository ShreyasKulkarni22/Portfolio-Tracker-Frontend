// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import ValidateForm from 'src/app/helpers/validateForm';
import { SnackBarService } from '../service/snack-bar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackbar:SnackBarService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          // alert(res.message);
          this.snackbar.showSnackBar(res.message)
          this.loginForm.reset();
          this.router.navigate(['market']);
        },
        error: (err) => {
          // alert(err?.error.message);
          this.snackbar.showSnackBar(err?.error.message)
          // console.log(err);
          this.snackbar.showSnackBar('Invalid Login Credentials! Please try again')
          // alert();
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      this.snackbar.showSnackBar('Invalid Login Credentials! Please try again')
    }
  }
}
