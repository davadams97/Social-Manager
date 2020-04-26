import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  public url: string = 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3AUS&t=ns&st=adv&p=1';

  constructor(private _http: HttpClient) {
  }

  public getExpiringPerCountry(): Observable<any> {
    const head: HttpHeaders = new HttpHeaders().set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com')
      .append('x-rapidapi-key', 'fca4bb1a25msh940c2d91312e6e0p151602jsn7370b392364a');
    return this._http.get<any>(this.url, {headers: head});
  }
}
