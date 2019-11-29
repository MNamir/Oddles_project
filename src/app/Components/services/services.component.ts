import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  imgData = [
    {
      src : './../../../assets/icons/Layer 3.png',
      text : 'SMART CONTRACTS',
      subText: 'DEVELOPMENT'
    },
    {
      src : './../../../assets/icons/Layer 4.png',
      text : 'EXCHANGES'
    },
    {
      src : './../../../assets/icons/Layer 5.png',
      text : 'BLOCKCHAIN',
      subText: 'DEVELOPMENT'
    },
    {
      src : './../../../assets/icons/Network-512.png',
      text : 'HYPERLEDGER'
    },
    {
      src : './../../../assets/icons/if_Dzone_669685.png',
      text : 'PRIVATE BLOCKCHAIN',
      subText: 'DEVELOPMENT'
    },
    {
      src : './../../../assets/icons/Layer 6.png',
      text : 'WALLET'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
