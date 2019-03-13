import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {HttpClient} from '@angular/common/http';
import {faClipboardCheck, faInfoCircle, faQuestionCircle, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {environment} from '../../../../environments/environment';

const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute, private dataService: DataService, private http: HttpClient) { }

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
  isInfoClicked = false;
  isHelpClicked = false;
  loginHasError = false;
  loginError = '';

  returnURL: string;

  faSignInAlt = faSignInAlt;
  faClipboardCheck = faClipboardCheck;
  faQuestionCircle = faQuestionCircle;
  faInfoCircle = faInfoCircle;

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  // TODO NGSWITCH
  onSignupClick() {
    if (!this.isSignupClicked) {
      this.isSignupClicked = true;
      this.isHelpClicked = false;
      this.isLoginClicked = false;
      this.isInfoClicked = false;
    }
  }

  onLoginClick() {
    if (!this.isLoginClicked) {
      this.isLoginClicked = true;
      this.isHelpClicked = false;
      this.isSignupClicked = false;
      this.isInfoClicked = false;
    }
  }

  onInfoClick() {
    if (!this.isInfoClicked) {
      this.isInfoClicked = true;
      this.isHelpClicked = false;
      this.isSignupClicked = false;
      this.isLoginClicked = false;
    }
  }

  onHelpClick() {
    if (!this.isHelpClicked) {
      this.isHelpClicked = true;
      this.isInfoClicked = false;
      this.isLoginClicked = false;
      this.isSignupClicked = false;
    }
  }

  login() {
    // We checked for validation in HTML so our credentials should not be blank.
    this.auth.login(this.credentials.email, this.credentials.pwd).subscribe((data: any ) => {
      if (data.status === 200) {
        // User authenticated
        this.dataService.setCurrentUser(data);
        // route user to the return URL
        setTimeout( () => {
          this.router.navigateByUrl(this.returnURL);
        }, 10);
      } else {
        this.credentials.email = '';
        this.credentials.pwd = '';
        if (data.status === 401) {
          this.loginHasError = true;
          this.loginError = data.message;
        }
      }
    }, (error) => {
      this.credentials.email = '';
      this.credentials.pwd = '';
      this.loginHasError = true;
      this.loginError = 'Unexpected Error';
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
          this.signupCredentials.name = '';
          this.signupCredentials.email = '';
          this.signupCredentials.pwd = '';
          this.signupCredentials.phone = '';
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
