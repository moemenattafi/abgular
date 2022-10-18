import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesComponent } from './components/my-heroes/my-heroes.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';


const routes: Routes = [
  {path:'myHeroes',component:MyHeroesComponent},
  {path:'topHeroes',component:TopHeroesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
