import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  subject: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  triggerON() {
    this.subject.next(true);
  }

  triggerOFF() {
    this.subject.next(false);
  }
}
