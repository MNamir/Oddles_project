import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-servicetype',
  templateUrl: './servicetype.component.html',
  styleUrls: ['./servicetype.component.scss']
})
export class ServicetypeComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() textImg: string;
  @Input() subText: string;
  // @Output() onMouseOver = new EventEmitter();
  // @Output() onMouseOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  mouseOver(the) {
    // this.onMouseOver.emit();
    // const x = the.target;
    // x.classList.add('scale');
    // x.style.transform = 'scale(1.5,1.5)';
    const thisSec = the.querySelector('.service_wrap');
    thisSec.classList.add('scale');
  }
  mouseOut(the) {
    // const x = the.target;
    // x.classList.remove('scale');
    const thisSec = the.querySelector('.service_wrap');
    thisSec.classList.remove('scale');
    // this.onMouseOut.emit();
}

}
