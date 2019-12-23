import {Component, Input, OnInit} from '@angular/core';

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
  ];
  constructor() { }

  ngOnInit() {
  }
  openModal() {
    const body = document.querySelector('body');
    const overLay = document.createElement('div');
    overLay.classList.add('overlay');
    body.classList.add('popup_open');
    body.appendChild(overLay);
    const overlayTarget = document.querySelector('.overlay');
    overlayTarget.addEventListener('click', function() {
      this.popupVisible = true;
      body.classList.remove('popup_open');
      this.remove();
    });
  }
  closeModal() {
    const body = document.querySelector('body');
    const close = document.querySelector('.close');
    const overlayTarget = document.querySelector('.overlay');
    body.classList.remove('popup_open');
    overlayTarget.remove();
  }
  mouseOverEvent(this) {
    // const x = this.target;
    // const thisSec = x.querySelector('.service_wrap');
    // thisSec.classList.add('scale');
    // // x.style.transform = 'scale(1.5,1.5)';
  }
  mouseOutEvent(this) {
    // const thisSec = document.querySelector('.service_wrap');
    // thisSec.classList.remove('scale');
    // // x.style.transform = 'scale(1,1)';
  }
}
