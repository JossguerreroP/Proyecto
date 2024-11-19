import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements OnInit {


salir() {
localStorage.clear();
window.location.reload();
}


  selected:boolean =false;
  expanded:boolean = true;
   data:any;
  public  user:any=false;
usuario:any;
  constructor(private dialog: MatDialog, private router:Router) 
  { }
 
  ngOnInit(): void {
    this.data=(localStorage.getItem('user'));
    let user=JSON.parse(this.data);
    this.usuario=user
    console.log(user)

    if(user==null){
      this.user=false;
      this.dialog.open(LoginComponent,{
        disableClose: true 
     });
    }else{
      this.user=true;
    }
    
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
