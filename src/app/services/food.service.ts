import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from '../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodByTag(tagInput:string):Food[]{
    return tagInput === 'All'? this.getAll() : this.getAll().filter(f => f.tags?.toString().toLowerCase().includes(tagInput.toLowerCase()))
  }

  getFoodById(id:any):Food{
    const result = this.getAll().find(x => x.id === id)!;
    return result;
  }

  getTagsCount(tagName:string){
     const tagsCount = this.getAll().filter(x => x.tags?.includes(tagName));
     if(tagName === 'All'){
      return this.getAll().filter(x => x.tags).length
     }
     return tagsCount.length
  }

  getAllTags():Tag[]{
    return [
      { name: 'All', count:this.getTagsCount('All') },
      { name: 'FastFood', count:this.getTagsCount('FastFood') },
      { name: 'Pizza', count:this.getTagsCount('Pizza')},
      { name: 'Lunch', count:this.getTagsCount('Lunch') },
      { name: 'SlowFood', count:this.getTagsCount('SlowFood') },
      { name: 'Hamburger', count:this.getTagsCount('Hamburger')},
      { name: 'Fry', count:this.getTagsCount('Fry') },
      { name: 'Soup', count:this.getTagsCount('Soup')},
    ]
  }
}
