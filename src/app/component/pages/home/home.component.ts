import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name']){
        let a = params['name']        
        this.foods = this.foodService.getAll().filter(x => x.name.toLowerCase().includes((a).toLowerCase()));
      }else if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag'])          
      }else{
        this.foods = this.foodService.getAll()
      }
    });
  }


}