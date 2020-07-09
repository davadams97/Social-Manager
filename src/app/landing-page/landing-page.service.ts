import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EMPTY, Observable} from 'rxjs';
import {catchError, shareReplay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LandingPageService {
    private _cachedExpiringPerCountry: {} = {};

    constructor(private _http: HttpClient) {
        let r = Math.random().toString(36).substring(7);
        console.log('random', r);
    }

    public getExpiringPerCountry$(countryCode?: string): Observable<any> {
        const url: string = `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3A${countryCode}&t=ns&st=adv&p=1`;
        const header: HttpHeaders = new HttpHeaders()
            .set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com')
            .append(
                'x-rapidapi-key',
                'd5606574aemsh8f4f6dfa46279dcp15dfe6jsna48d5f811ebd'
            );

        if (this._cachedExpiringPerCountry[countryCode]) {
            return this._cachedExpiringPerCountry[countryCode];
        }
        // TODO: create interface
        this._cachedExpiringPerCountry[countryCode] = this._http
            .get<any>(url, { headers: header, observe: 'response' })
            .pipe(
                shareReplay(1),
                catchError(() => {
                    delete this._cachedExpiringPerCountry[countryCode];
                    return EMPTY;
                })
            );

        return this._cachedExpiringPerCountry[countryCode];
    }
}
