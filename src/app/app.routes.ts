import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Service } from './service/service';
import { Subscibe } from './subscibe/subscibe';
import { Footer } from './footer/footer';
import { Home } from './home/home';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'sign-in', component: SignIn }
];
