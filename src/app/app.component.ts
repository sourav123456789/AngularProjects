import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames =['purbasha','Anna','chris'];

  //create the form programatically
  signUpForm: FormGroup

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData' : new FormGroup({
        'Username': new FormControl(null, [Validators.required , this.forbidenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forBiddenEmails),
      }),
      'gender': new FormControl('male')
    });
  }

  OnSubmit() {
    console.log(this.signUpForm)
  }

  forbidenNames (control : FormControl) : {[s : string] : boolean}{

    if(this.forbiddenUserNames.indexOf(control.value)!== -1){
      return  {'nameIsForBidden' : true};
    }
    return null;
  }

  forBiddenEmails (control : FormControl) : Promise<any> | Observable<any>{
      const promise = new Promise <any>((resolve , reject) =>{
        setTimeout (()=>{
          if(control.value === 'test@test.com'){
            resolve({'emaiIdFrBidden' : true});
          }else{
            resolve(null);
          }
        },1500);
      }); 
      return promise; 
  }
}
