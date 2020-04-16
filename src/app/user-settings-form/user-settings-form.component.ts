import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-settings';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
     name: '',
    emailOffers: null,
    interfaceStyle: 'null',
    subscriptionType: 'null',
    notes: ''
  };
  startDate: Date;
  singleModel = 'on';
// to make a copy of the data in case of a user click mistakely back
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.startDate = new Date();
  }
  // handling form control event
onBlur(field: NgModel){
    console.log('onBlur', field.valid);
}
// visual indication to user on error
 onHttpError(errorResponse: any){
console.log('error: ', errorResponse);
this.postError = true;
this.postErrorMessage = errorResponse.error.errorMessage;
}

onSubmit(form: NgForm){
console.log('Onsubmit: ', form.value);
/*
if (form.valid){
this.dataService.postUserSettingsForm(this.userSettings).subscribe(
  result => console.log('Success: ', result),
  error => this.onHttpError(error)
  // error => console.log('Error: ', error)
);
}
else {
  this.postError = true;
  this.postErrorMessage = 'please fix before BoostTech get angry'
} */
}

}
