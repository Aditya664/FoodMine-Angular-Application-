import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  searchTerm:any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['name']){
        this.searchTerm = params['name']
      }
    });
  }

  onSearch(){
    this.router.navigateByUrl('/search/'+this.searchTerm)
  }

}
