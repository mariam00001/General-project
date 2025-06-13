import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule]
})
export class SignIn {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

onSubmit() {
  console.log("Form values:", this.signInForm.value);
  console.log("Form valid?", this.signInForm.valid);

  if (this.signInForm.valid) {
    const formData = this.signInForm.value;

    this.http.post('https://dummyjson.com/auth/login', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (res: any) => {
        console.log('✅ Login success', res);

        alert('✅ Login successful!\nWelcome, ' + res.username);
        localStorage.setItem('accessToken', res.token); 
        console.log('Token:', res.token);
      },
      error: (err) => {
        alert('please enter user name : emilys and the password : emilyspass to test thw login ');
        console.error('Login failed', err);
      }
    });
  } else {
    alert('⚠️ Please fill in all required fields.');
  }
}


}
