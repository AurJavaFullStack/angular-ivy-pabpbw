import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
   isCollapsed: boolean = true;
  //user :any;
  //@Input('name') userName: string= 'Temp';
  @Input('user') user: User;

  constructor() {
     /*this.user={
  //name:'Foo Bar!',
  name: this.userName,
  title:'Software Developer',
  address:'1234 Main St, City, State, 100018',
  phone:[
    '123-123-1234',
    '456-456-4567'
  ]
  };*/
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }

  ngOnInit() {
    /*this.user={
  //name:'Foo Bar!',
  //name: this.userName,
  name:this.user.name,
  title:this.user.designation,
  address:this.user.address,
  phone: this.user.phone
  };*/
  }

}