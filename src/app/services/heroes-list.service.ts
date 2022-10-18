import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesListService {


  constructor() { }
  heroes:Array<Hero>=[
    new Hero (1,"Mr.Nice"),
    new Hero (2,"Narco"),
    new Hero (3,"Bombasto"),
    new Hero (4,"Celeritas"),
    new Hero (5,"RubberMan"),
    new Hero (6,"Dynama"),
    new Hero (7,"Dr IQ"),
    new Hero (8,"Magma"),
    new Hero (9,"Tornado"),
  ]

}
