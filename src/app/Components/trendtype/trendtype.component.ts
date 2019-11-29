import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trendtype',
  templateUrl: './trendtype.component.html',
  styleUrls: ['./trendtype.component.scss']
})
export class TrendtypeComponent implements OnInit {
  @Input() trendImg: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() moreText: string;
  constructor() { }

  ngOnInit() {
  }

}
