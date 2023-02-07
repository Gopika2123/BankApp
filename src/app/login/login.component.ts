import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd executed

                                              //class is a collection of properties and methods

  constructor() { } //first executed

                   // used for object initialise
                  // it automatically invokes when an object is created

  ngOnInit(): void { //2nd executed
    
                    // initial process of a component
                   //when a compinent is created at same time it initialise or authorize
                  //when a component is created,there is a lifecycle for it.
  }

  //properties

  // aim="your perfect banking partner"

  acno:any;
  pwd:any;

  userdetails:any={
    1000:{acno:1000,username:"gopika",password:1000,balance:4000},
    1001:{acno:1001,username:"arya",password:1001,balance:2000},
    1002:{acno:1002,username:"sneha",password:1002,balance:3000}

    

  }
  //userdefined functions//4th executed
  login(){

    var acno=this.acno;
    var pwd=this.pwd;
    var userdetails=this.userdetails;

    if(acno in userdetails){
        if(pwd==userdetails[acno]["password"]){
             alert("login successfull");
             }
        else{
            alert("incorrect password")
            }
}
else{
  alert("user not found")
}


    // alert("login clicked")
  }
acnochange(event:any){
  // console.log(event.target.value);
  this.acno=event.target.value;
  console.log(this.acno);
  
  
}
pwdchange(event:any){
  // console.log(event.target.value);
  this.pwd=event.target.value;
  console.log(this.pwd);
  
  
}
}
