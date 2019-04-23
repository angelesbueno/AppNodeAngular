import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userExist(username: string): Observable<number> {
    return new Observable( subscriber => {
      setTimeout( () => {
        if (username.toUpperCase() === 'ANGELES') {
          subscriber.next(1);
        }
        else {
          subscriber.next(0);
        }

        subscriber.complete();
      }, 600);
    });
  }
  
}
