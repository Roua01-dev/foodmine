import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profilForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

 constructor( private formBuilder: FormBuilder,
  private userService: UserService,
  private activatedRoute: ActivatedRoute,
  private router: Router){

 }


 get fc() {
  return this.profilForm.controls;

}



  ngOnInit(): void {
    let {name,address,email}=this.userService.currentUser;
    this.profilForm=this.formBuilder.group({
  name:[name,Validators.required],
  address:[address,Validators.required],
  email:[email,Validators.required],

});console.log(this.userService.currentUser)


  }

}
