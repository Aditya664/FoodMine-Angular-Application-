import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food:Food;
  constructor(private route:ActivatedRoute,private foodService:FoodService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x =>{
      this.food = this.foodService.getFoodById(x['id'])
    })
  }

}

