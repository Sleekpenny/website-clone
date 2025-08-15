import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibraryService {

  public user$: Observable<any>  = new BehaviorSubject<any>(0);
  public boy$: Observable<any>  = new BehaviorSubject<any>(0);

  constructor() { }
}
