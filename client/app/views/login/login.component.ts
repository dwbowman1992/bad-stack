import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private router: Router, private auth: AuthService, private modalService: BsModalService, private route: ActivatedRoute, private dataService: DataService) { }
  credentials: any = {
    email: '',
    pwd: ''
  };
  returnURL: string;

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login() {
    // We checked for validation in HTML so our credentials should not be blank.
    this.auth.login(this.credentials.email, this.credentials.pwd).subscribe((data: any ) => {
      if (data.message === false) {
        // if invalid login, reset the form
        this.credentials.email = '';
        this.credentials.pwd = '';
      } else {
        // if we get here, there is no error, the return is valid
        // Let's first save the info into local storage for later use. We can parse this back
        // into an object later
        this.dataService.setCurrentUser(data);
        // route user to the return URL
        setTimeout( () => {
          this.router.navigateByUrl(this.returnURL);
        }, 10);
      }
    });
  }

}
