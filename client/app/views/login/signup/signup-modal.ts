import {Component, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.html'
})
export class SignupModalComponent {
  modalRef: BsModalRef;

  signupCredentials: any = {
    email: '',
    pwd: '',
    name: '',
    phone: ''
  };

  constructor(private modalService: BsModalService, private http: HttpClient) {
  }

  signup() {
    this.http.post(APIEndpoint + 'users', {
      name: this.signupCredentials.name,
      email: this.signupCredentials.email,
      password: this.signupCredentials.pwd,
      phone: this.signupCredentials.phone
    }).subscribe((data : any) => {
      // this.credentials.email = this.signupCredentials.email;
      // this.credentials.pwd = this.signupCredentials.pwd;
      // this.closeSignupModal.nativeElement.click();
      // this.login();
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
