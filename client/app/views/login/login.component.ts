import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ViewChild, ElementRef } from '@angular/core';

const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('closeSignupModal') closeSignupModal: ElementRef;
  credentials: any = {
    email: '',
    pwd: ''
  };

  signupCredentials: any = {
    email: '',
    pwd: '',
    name: '',
    phone: ''
  };

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
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
        localStorage.setItem('currentUsr', JSON.stringify(data));
        // route user to the return URL
        this.router.navigateByUrl(this.returnURL);
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
      this.credentials.email = this.signupCredentials.email;
      this.credentials.pwd = this.signupCredentials.pwd;
      this.closeSignupModal.nativeElement.click();
      this.login();
    }, (err) => {
      this.signupCredentials.name = '';
      this.signupCredentials.email = '';
      this.signupCredentials.pwd = '';
      this.signupCredentials.phone = '';
      this.closeSignupModal.nativeElement.click();
      // add bootstrap toaster error notification
    });
  }

}
