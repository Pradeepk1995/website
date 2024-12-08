import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  showServices: boolean = true;
  showServicesStyle: any = {};
  navbarstyle: any = {};
  showHeader:boolean=true;
  isloged:boolean=false;
  showlogedHeader:boolean=false;
  headerScrollStyle: any;
  // headerScrollStyle = {
  //   background: 'rgba(40, 54, 70, 1)',
  //   padding: '12px 0',
  // };
  ngOnInit(): void {}
}
