
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/classes/hero';
import { HeroesListService } from 'src/app/services/heroes-list.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss']
})
export class MyHeroesComponent implements OnInit {
  heroes:Hero[]=[];
  selectedTab:string;
  constructor(private heroListService:HeroesListService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void {
    this.heroes=this.heroListService.heroes;
  }






}
