import { Component } from '@angular/core';
import { SignIn } from '../sign-in/sign-in';
import { Footer } from '../footer/footer';
import { Subscibe } from '../subscibe/subscibe';
import { Service } from '../service/service';
import { AboutUs } from '../about-us/about-us';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero,AboutUs,Service,Subscibe,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
