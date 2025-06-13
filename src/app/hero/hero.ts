import { Component } from '@angular/core';
import Aos from 'aos';
import { SignIn } from '../sign-in/sign-in';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  ngOnInit(): void {
    Aos.init();
  };
}
