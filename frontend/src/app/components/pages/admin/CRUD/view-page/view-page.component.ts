import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  foods: Food[] = [];
  returnUrl = 'add';
  isSubmitted = false;



  constructor(private foodService: FoodService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    // Utiliser le service pour récupérer tous les aliments
    this.foodService.getAll().subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }


  submit(){
    this.isSubmitted = true;

    this.router.navigateByUrl(this.returnUrl);
  }


}
