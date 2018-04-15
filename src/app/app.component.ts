import {Component, OnInit} from '@angular/core';
import {NpService} from './np.service';
import { Area } from './models/area.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NpService]
})
export class AppComponent implements OnInit {

  areas: Area[] = [];

  constructor(private npService: NpService) {}

  ngOnInit() {
    this.npService.getAreas()
      .subscribe(areas => {
        areas.data.map(area => {
          console.log(area);
          this.areas.push(area);
        });
      });
  }

}
