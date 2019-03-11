import {Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

import { faSignInAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import {environment} from '../../../environments/environment';

const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-login',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute, private dataService: DataService, private renderer: Renderer2, private http: HttpClient) { }

  credentials: any = {
    email: '',
    pwd: ''
  };

  signupCredentials: any = {
    name: '',
    email: '',
    pwd: '',
    phone: ''
  };

  isLoginClicked = true;
  isSignupClicked = false;
  returnURL: string;
  faSignInAlt = faSignInAlt;
  faClipboardCheck = faClipboardCheck;

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSignupClick() {
    if (!this.isSignupClicked) {
      this.isSignupClicked = true;
      this.isLoginClicked = false;
    }
  }

  onLoginClick() {
    if (!this.isLoginClicked) {
      this.isLoginClicked = true;
      this.isSignupClicked = false;
    }
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

  signup() {
    this.http.post(APIEndpoint + 'users', {
      name: this.signupCredentials.name,
      email: this.signupCredentials.email,
      password: this.signupCredentials.pwd,
      phone: this.signupCredentials.phone
    }).subscribe((data : any) => {
      this.auth.login(this.signupCredentials.email, this.signupCredentials.pwd).subscribe((data: any ) => {
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
      // add bootstrap alert
    }, (err) => {
      this.signupCredentials.name = '';
      this.signupCredentials.email = '';
      this.signupCredentials.pwd = '';
      this.signupCredentials.phone = '';
      // add bootstrap alert
    });
  }

}
