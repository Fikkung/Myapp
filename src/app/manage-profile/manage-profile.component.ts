import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss'
})
export class MangeProfileComponent implements OnInit{



  myForm: FormGroup = new FormGroup({
    prefix: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl(''),
    educations: new FormArray([])
  });

submitted = false;

prefixs =[
  { text: 'Mrs.', value: 'MRS'},
  { text: 'Ms.', value: 'MS'},
  { text: 'Mx.', value: 'MX'}
]

get f(): {[key: string]: AbstractControl} {
  return this.myForm.controls;
}

get educations (){
  return this.myForm.controls['educations'] as FormArray;
}



constructor (private fb: FormBuilder) {

}

ngOnInit() {
  const myFormData = this.getDataMyForm();

  this.myForm = this.createFormGroup(myFormData);

  myFormData.educations.forEach((e: any) => {
    this.addEducation(e);
  });
  
}



getDataMyForm(){
  const dataMyForm = localStorage.getItem('myForm');
  if (!dataMyForm){
    return undefined;
  }

  return JSON.parse(dataMyForm);
}

createFormGroup(val: any){
  const group = this.fb.group({
    prefix: [null, Validators.required],
    fname: [null,[Validators.required, Validators.maxLength(10)]],
    lname: [null,[Validators.required, Validators.maxLength(10)]],
    age: [null, Validators.required],
    educations: this.fb.array([])
  });

  if(val) {
    group.patchValue(val);
  }


 
  
  return group;
}

addEducation(val: any = undefined){
  const educations = this.fb.group({
    year: [null, Validators.required],
    level: [null, Validators.required],
    location: [null, Validators.required]
  });

if(val) {
  educations.patchValue(val);
}

  this.educations.push(educations)
}

removeEducation(index: number){
  this.educations.removeAt(index);
}

onSubmit(){
  console.log(this.myForm);
  this.submitted = true;
  localStorage.setItem('myForm', JSON.stringify (this.myForm.getRawValue()));
}

onReset(){
  this.submitted = false;
  this.myForm.reset();
}

}