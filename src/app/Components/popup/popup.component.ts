import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() serviceText: string;
  @Input() serviceSubText: string;
  @Output() popupClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // this.popupClose.emit();
  }
  onCloseClick() {
    this.popupClose.emit();
  }
}
