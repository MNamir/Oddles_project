import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-servicetype',
  templateUrl: './servicetype.component.html',
  styleUrls: ['./servicetype.component.scss']
})
export class ServicetypeComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() textImg: string;
  @Input() subText: string;
  constructor() { }

  ngOnInit() {
  }

}
