import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  trenddata = [
    {
      path: './../../../assets/sliders/Real-Estate-Investment-Dropping.png',
      title: 'How Blockchain Technology',
      subtitle: 'Will Fortify',
      moreText: 'Real Estate Industry'
    },
    {
      path: './../../../assets/sliders/cybercrime2.png',
      title: 'Blockchain Technology',
      subtitle: 'Can Help',
      moreText: 'Fight Cyber Crimes'
    },
    {
      path: './../../../assets/sliders/businessman-business-sketch.png',
      title: 'How Blockchain Technology',
      subtitle: 'Contributing To',
      moreText: 'Research & Development'
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    nav: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
      320: {
        items: 1
      },
      575: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
