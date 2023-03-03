import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route:ActivatedRoute , private router: Router){}
  ngOnInit(): void {
    // const name = this.route.snapshot.paramMap.get('searchTerm');
    // console.log(name);
  }
  title = 'foodme';
  // onClick() {
  //   this.router.navigateByUrl('search/22')l
  // }
}
