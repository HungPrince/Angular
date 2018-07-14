import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-customer-dashboard',
    templateUrl: './customer-dashboard.component.html',
    styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
    user: any;
    constructor(userService: UserService) { this.user = userService.userName}

    ngOnInit() {
    }

}
