import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeroesComponent } from './components/my-heroes/my-heroes.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    MyHeroesComponent,
    TopHeroesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
