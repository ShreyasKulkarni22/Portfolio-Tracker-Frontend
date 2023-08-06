import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from '../service/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard   {
  constructor(private auth: AuthService,
  private router: Router,
  private snackbar: SnackBarService) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.snackbar.showSnackBar('Please login first!!', 'Dismiss', 5000, 'custom-snack-bar');
      this.router.navigate(['login']);
      return false;
    }
  }
}