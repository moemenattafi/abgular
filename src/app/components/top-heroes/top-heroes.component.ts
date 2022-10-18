import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/classes/hero';
import { HeroesListService } from 'src/app/services/heroes-list.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.scss']
})
export class TopHeroesComponent implements OnInit {
  heroes:Hero[]=[];
  topHeroes:Hero[]=[];
  constructor(private heroListService:HeroesListService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getTopHeroes();
  }
  getHeroes():void{
    this.heroes=this.heroListService.heroes;
  }
  getTopHeroes():void{
    for(var i=0 ; i<4; i++ ){
      console.log(this.heroes[i]);

        this.topHeroes.push(new Hero(this.heroes[i].id,this.heroes[i].name));
    }

  }
}
