import {Component, OnInit} from '@angular/core';
import {NpService} from './np.service';
import { Area } from './models/area.model';
import {City} from './models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NpService]
})
export class AppComponent implements OnInit {

  areas: Area[] = [];
  cities: City[] = [];
  areaCities: City[] = [];

  isLoadedAreas = false;
  isLoadedCities = false;

  constructor(private npService: NpService) {}

  ngOnInit() {
    this.isLoadedAreas = false;
    this.npService.getAreas()
      .subscribe(areas => {
        areas.data.map(area => {
          console.log(area);
          this.areas.push(area);
        });
        this.isLoadedAreas = true;
      });

    this.isLoadedCities = false;
    this.npService.getCities()
      .subscribe(cities => {
        cities.data.map(city => {
          console.log(city);
          this.cities.push(city);
        });
        this.isLoadedCities = true;
      });
  }

  onChangeArea(newValue) {
    this.isLoadedCities = false;
    this.areaCities = this.cities.filter(c => c.Area === newValue);
    console.log(newValue);
    console.log(this.areaCities.length);
    console.log(this.cities.length);
    console.log('on change area event:' + newValue);
    this.isLoadedCities = true;
  }

  onChangeCity(newValue) {
    //
    console.log('on change city:' + newValue);
  }

  trackByIdx(Ref: number, obj: any): any {
    return Ref;
  }

}
