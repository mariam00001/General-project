import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'General-project'
  ngOnInit(): void {
    AOS.init();
  };
}
