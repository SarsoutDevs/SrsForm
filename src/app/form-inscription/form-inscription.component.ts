import { Location } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder , FormGroup, Validators,FormControl,ReactiveFormsModule, NgForm } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';



@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss'],
})


export class FormInscriptionComponent{

  same = false;
  // divfirstreq = false;
  // divfirstminLength = false;


  // utouched:boolean=false;
  // uinvalid:boolean=false;
  // uminLength:boolean=false;

  form !: FormGroup;

  constructor(){
    this.form = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"),
      ]),
      confpassword: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"),
      ]),
    });
  }

  onSubmit(f:NgForm){
    console.log(f.value);
  }
  

  reload(){
    location.reload();
  }

  checkpass(){
    if((this.form.get('confpassword')) === (this.form.get('password'))){
      this.same = true;
    }
    if((this.form.get('confpassword')) !== (this.form.get('password'))){
      this.same = false;
    }
  }


  registred(){ 
      document.getElementById("divsucc")!.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" id="hid" role="alert">
      <strong>Welcome ! You Are successfully Registred</strong> 
      <!-- <button type="button" (click)="hide()" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button> --> 
      </div>` ;
      setTimeout(() => {
        // document.getElementById("divsucc")!.style.display = "none" ;
        location.reload();
      }, 2000);
  }


  // hide(){
  //   document.getElementById("hid")!.style.display = "none" ;
  // }
  
  
  // checkuser(){
  //   if(1==1){
  //     this.utouched = true;
  //     this.uinvalid = true;
  //   }
  // }

//   checkfirst(fir:any){
//     if(fir.value.length==0){
//       this.divfirstreq = true;
//     }
//      if(fir.value.length >0 && fir.value.length <5){
//       this.divfirstminLength = true ;
//      }
// }


}