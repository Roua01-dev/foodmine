import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent  implements OnInit {

  addForm!:FormGroup;
  isSubmitted = false;
  returnUrl='/admin';
  constructor(private formBuilder: FormBuilder,
     private activatedRoute:ActivatedRoute,
     private crudService:CrudServiceService,
     private router:Router) {}
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name:['', [Validators.required,Validators.minLength(5)]],
      price:['', Validators.required],
      tag:['', Validators.required],
      favorite:['', Validators.required],
      stars:['', Validators.required],
      origins:['', Validators.required],
      cookTime:['', Validators.required],
      Image:['', Validators.required]
    });

  //  this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc(){
    return this.addForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if (this.addForm.invalid) return;
    const fv = this.addForm.value;
    const food: IFood = {
      name: fv.name,
      price: fv.price,
      tags: fv.tags,
      favorite: fv.favorite,
      stars: fv.stars,
      imageUrl: fv.imageUrl,

      origins :fv.origins ,
      cookTime:fv.cookTime

    };
    this.crudService.addFood(food).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    },error=>{
      console.error('Error');
    }


    )

  }



}
