import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss']
})
export class AtomButtonComponent implements OnInit {
  @Input() text!:string;
  @Input() class!:string;
  constructor() { }

  ngOnInit() {
  }

}
