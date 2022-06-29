import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
usrFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { 
    // form control
    // intialize
    // First test case
    // this.usrFormGroup=new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   email:new FormControl(''),
    //   mobileNo:new FormControl(''),
    //   address:new FormGroup({
    //     city: new FormControl(''),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl('')

    // });
    // Second test case
    this.usrFormGroup=this.fb.group({
     fullName:['',[Validators.required, Validators.minLength(3)]],
     email:[''],
     mobileNo:fb.array([fb.control('')]),
    address:this.fb.group({
      city:[''],
      street:['']
    }),
    referral:[''],
    referralOther:[''],
    password:['']

    })

  }

  // convert fullName to property
  get fullName(){
    return this.usrFormGroup.get('fullName');
  }

  get mobileNo(){
    return this.usrFormGroup.get('mobileNo') as FormArray;
  }


  get referral(){
    return this.usrFormGroup.get('referral');
  }
  addMobile(){
    this.mobileNo.push(this.fb.control(''));
  }

  updateReferralValidation(){
    if(this.referral?.value=='other'){
      this.usrFormGroup.get('referralOther')?.addValidators([Validators.required]);

    }
    else{ 
      this.usrFormGroup.get('referralOther')?.clearValidators();
    }
    this.usrFormGroup.get('referralOther')?.updateValueAndValidity();
  }
  ngOnInit(): void {
  }

}
