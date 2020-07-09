import {Component, OnDestroy, OnInit} from '@angular/core';

import {LandingPageService} from './landing-page.service';

import {Subject} from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<any>;

  constructor(private _lpService: LandingPageService) {
  }

  public ngOnInit() {
    this._load();
  }

  public ngOnDestroy() {
    this._destroy$.next();
  }

  private _load(): void {
    this._lpService.getExpiringPerCountry$('CA').subscribe((res) => {
      const keys = res.headers.keys();
      const headers = keys.map((key) => `${key}: ${res.headers.get(key)}`);
      console.log(res.body, headers);
    });
  }

}
