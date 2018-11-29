import {Component, EventEmitter, Output, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.html'
})
export class SignupModalComponent implements OnInit {
  @Output() add = new EventEmitter();

  modalRef: BsModalRef;
  returnURL: string;


  signupCredentials: any = {
    email: '',
    pwd: '',
    name: '',
    phone: ''
  };

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  constructor(private modalService: BsModalService, private http: HttpClient, private router: Router, private auth: AuthService, private route: ActivatedRoute) {
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
          this.signupCredentials.email = '';
          this.signupCredentials.pwd = '';
        } else {
          // if we get here, there is no error, the return is valid
          // Let's first save the info into local storage for later use. We can parse this back
          // into an object later
          localStorage.setItem('currentUsr', JSON.stringify(data));
          // route user to the return URL
          setTimeout( () => {
            this.router.navigateByUrl(this.returnURL);
          }, 10);
        }
      });
      this.modalRef.hide();
      // add bootstrap alert
    }, (err) => {
      this.signupCredentials.name = '';
      this.signupCredentials.email = '';
      this.signupCredentials.pwd = '';
      this.signupCredentials.phone = '';
      this.modalRef.hide();
      // add bootstrap alert
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
