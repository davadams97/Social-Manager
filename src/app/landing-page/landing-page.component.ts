import { Component, OnInit } from '@angular/core';
import {LandingPageService} from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private _lpService: LandingPageService) { }

  ngOnInit() {
    this._lpService.getExpiringPerCountry().subscribe(res => console.log(res));
  }

}
