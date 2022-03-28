import { Component, VERSION } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string;
  private destroy$ = new Subject<void>();
  constructor(private testService: TestService) {
    this.testService
      .getTest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => (this.text = val));
  }
  name = 'Angular ' + VERSION.major;

  changeText() {
    this.testService.setTest('test2');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
