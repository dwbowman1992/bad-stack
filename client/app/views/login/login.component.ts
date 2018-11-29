import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isFadeOut = false;
  credentials: any = {
    email: '',
    pwd: ''
  };

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }
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
        this.isFadeOut = true;
        // if we get here, there is no error, the return is valid
        // Let's first save the info into local storage for later use. We can parse this back
        // into an object later
        localStorage.setItem('currentUsr', JSON.stringify(data));
        // route user to the return URL
        setTimeout( () => {
          this.router.navigateByUrl(this.returnURL);
        }, 1000);
      }
    });
  }

  onTap(event) {
    if (event.pointerType === 'touch') {
      // open modal dialog
      console.log(event);
    }
  }

}
