import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {
  private test: BehaviorSubject<string> = new BehaviorSubject<string>('test');
  constructor() {}

  getTest() {
    return this.test.asObservable();
  }

  setTest(val: string) {
    this.test.next(val);
  }
}
