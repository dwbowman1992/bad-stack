import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private router: Router, private auth: AuthService, private modalService: BsModalService, private route: ActivatedRoute) { }
  credentials: any = {
    email: '',
    pwd: ''
  };
  returnURL: string;

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login() {
    this.modalRef.hide();
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
        setTimeout( () => {
          this.router.navigateByUrl(this.returnURL);
        }, 10);
      }
    });
  }

  onSignupClick() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
