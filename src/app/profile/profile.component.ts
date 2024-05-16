import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
myform : any ;

formeducations : any


ngOnInit() {
this.myform = this.getDataMyform();}

getDataMyform(){
  const dataMyform =localStorage.getItem('myform');
  if(!dataMyform){
    return undefined
  }
  return JSON.parse(dataMyform);
}

}