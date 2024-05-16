import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
  up = '+';
  total=0;
  nam1=0;
  nam2=0;
  
  
  cal(){
    this.total = Number(this.nam1) + Number(this.nam2) ;
    
  }
  
  profileResponse(rse: string){
    console.log

  }

//   }
// cal(){
//   this.total = this.nam1 + this.nam2;
 }