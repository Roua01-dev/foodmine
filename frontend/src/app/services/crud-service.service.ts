import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Food } from '../shared/models/Food';
import { IFood } from '../shared/interfaces/IFood';
import { FOODS_Add_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
const Food_KEY = 'Food';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private foodSubject =
  new BehaviorSubject<Food>(this.getUserFromLocalStorage());
  public foodObservable:Observable<Food>;
  constructor(private http:HttpClient,private toastrService:ToastrService) {
    this.foodObservable = this.foodSubject.asObservable();

   }

  addFood(addfood:IFood):Observable<Food>{
    return this.http.post<Food>(FOODS_Add_URL,addfood).pipe(
      tap({
        next:(food)=>{
          this.setUserToLocalStorage(food);
          this.foodSubject.next(food);
          this.toastrService.success (
          'Added Successful')

        },
        error :(errorResponse)=>{
          this.toastrService.error(errorResponse.error,'Register Failed')
        }


      })

    )

  }


  private setUserToLocalStorage(food:Food){
    localStorage.setItem(Food_KEY, JSON.stringify(food));
  }

  private getUserFromLocalStorage():Food{
    const userJson = localStorage.getItem(Food_KEY);
    if(userJson) return JSON.parse(userJson) as Food;
    return new Food();
  }


}
