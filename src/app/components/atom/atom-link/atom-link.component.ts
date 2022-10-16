import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'atom-link',
  templateUrl: './atom-link.component.html',
  styleUrls: ['./atom-link.component.scss']
})
export class AtomLinkComponent implements OnInit {
  @Input() text!:string;
  @Input() url!:string;
  @Input() class!:string;
  constructor() { }

  ngOnInit() {
  }

}
