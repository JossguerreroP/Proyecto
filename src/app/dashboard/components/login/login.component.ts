import { Component, OnInit,Inject,Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  username: string = '';
  password: string = '';
  
  loggedIn: boolean =false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  login() {
    if(this.username=='Darin' && this.password=='123'){
      localStorage.setItem('user', JSON.stringify({
        username:this.username,
        isAdmin:true,
        photo:'/assets/images/admin.jpg'
      }
      ));
      this.closeDialog();
      window.location.reload();
    }
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
     ){
      dialogRef.disableClose = true; 
  }

  public isLoggedIn():boolean{
    return this.loggedIn;
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }



}
