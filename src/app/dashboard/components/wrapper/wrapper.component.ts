import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements OnInit {
  selected:boolean =false;
  expanded:boolean = true;
  private data:any;
  public  user:any=true;

  constructor(private dialog: MatDialog, private router:Router) 
  { }
 
  ngOnInit(): void {
   
  }

  expander(){
    if(this.expanded){
      this.expanded=false;
    }else{
      this.expanded=true;
      
    }
    console.log(this.expanded)
  }

}
