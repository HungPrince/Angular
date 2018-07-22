import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    template: `
    <h2>Login</h2>
    <p>{{message}}</p>
    <p>
        <button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
        <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
    `
})

export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged' + (this.authService.isLoggedIn ? ' in' : ' out');
    }

    login() {
        this.message = 'Trying to log in';

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

                let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };

                this.router.navigate([redirectUrl], navigationExtras);
            }
        })
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}