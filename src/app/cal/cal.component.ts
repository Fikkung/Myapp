import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrl: './cal.component.scss'
})
export class CalComponent {
  title = 'myapp';
  up = '+';
  up1 = '-';
  up2 = '*';
  up3 = '/';

  total=0;
  total1=0;
  total2=0;
  total3=0;

  namcal1=0;
  namcal2=0;
  namcal3=0;
  namcal4=0;
  namcal5=0;
  namcal6=0;
  namcal7=0;
  namcal8=0;


  
  cal(){
    this.total = Number(this.namcal1) + Number(this.namcal2) ;
    
  }
  cal1(){
    this.total1 = Number(this.namcal3) - Number(this.namcal4) ;
    
  }
  cal2(){
    this.total2 = Number(this.namcal5) * Number(this.namcal6) ;
    
  }
  cal3(){
    this.total3 = Number(this.namcal7) / Number(this.namcal8) ;
    
  }
}
