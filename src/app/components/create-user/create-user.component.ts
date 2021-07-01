import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormArray, FormBuilder, AbstractControl, FormControl} from '@angular/forms';
import {MustMatch} from "../../_helpers/must-match.validator";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  multistep: FormGroup;
  stepNew: any = 1;

  public contactList: FormArray;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {

  }

  ngOnInit(): void {
    this.multistep = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      userName: ["", [Validators.required, Validators.minLength(5)]],
      phone: ["", [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      addressGroup: this.formBuilder.array([
        this.createEmpFormGroup()
      ])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
    // set contactlist to the form control containing contacts
    this.contactList = this.multistep.get('addressGroup') as FormArray;
  }

  get getControl() {
    return this.multistep.controls;
  }

  // contact formgroup
  createEmpFormGroup(): FormGroup {
    return this.formBuilder.group({
      addressTypes: ["", [Validators.required]],
      address: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
      code: ["", [Validators.required]],
    })
  }

  // add a contact form group
  addContact() {
    this.contactList.push(this.createEmpFormGroup());
  }

  // remove contact from group
  removeContact(index: any) {
    this.contactList.removeAt(index);
  }

  get contactFormGroup() {
    return this.multistep.get('addressGroup') as FormArray;
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index: any): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  previous() {
    this.stepNew = this.stepNew - 1;
  }

  next() {
    this.stepNew = this.stepNew + 1;
  }

  reset() {
    this.multistep.reset();
  }

  submit() {
    // if(this.step == 4) {
    //   this.route.navigate(['/thankyou'])
    // }
    console.log('User', this.multistep.value)

    this.userService.createUser(this.multistep.value)
  }

}




