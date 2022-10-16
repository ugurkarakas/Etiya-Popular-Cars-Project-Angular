import { Component, OnInit } from '@angular/core';
import { ContentComponent } from 'src/app/components/content/content.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
