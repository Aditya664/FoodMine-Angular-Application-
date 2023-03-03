import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:name', component:HomeComponent, data: {a: 'safsdgdsgd'}},
  {path:'tag/:tag', component:HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
