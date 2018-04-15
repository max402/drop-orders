import {Component, OnInit} from '@angular/core';
import {NpService} from './np.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NpService]
})
export class AppComponent implements OnInit {

  areas = [];

  constructor(private npService: NpService) {}

  ngOnInit() {
    this.npService.getAreas()
      .subscribe(areas => {
        areas.data.map(area => {
          console.log(area);
          this.areas.push(area.Description);
        });
      });
  }

}
