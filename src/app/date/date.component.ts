import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  //message: string = new Date().toDateString();

  dateMessage:string;
  someNumber : number = 30;

  constructor() { 
    setInterval(()=> {
    let currentDate = new Date();
    this.dateMessage = currentDate.toDateString() + '' + currentDate.toLocaleTimeString();
    }, 1000)
    //this.dateMessage = new Date().toDateString();
  }

  addTwoNumbers(a: number,b: number){
    return a+b;
  }

  ngOnInit() {
  }

}