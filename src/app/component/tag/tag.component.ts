import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() foodPagetags?:string[];
  @Input() justifyContent:string = 'center';
  tags?:Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPagetags)
   this.tags =  this.foodService.getAllTags()
  }

}
