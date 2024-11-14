import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements OnInit {
  expanded:boolean = false;
  private data:any;
  public  user:any=true;

  constructor(private dialog: MatDialog, private router:Router,) 
  { }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  expander(){
    if(!this.expanded){
      this.expanded=true;
    }else{
      this.expanded=false;
      
    }
    console.log(this.expanded)
  }

}
