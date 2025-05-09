import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);


  loginFormGroup = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  })

  invalidCredentials = false;

  login(){
    this.navigateHome();
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

}
