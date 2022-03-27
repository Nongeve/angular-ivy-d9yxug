import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  private destroy$ = new Subject<void>();
  text: string;
  constructor(private testService: TestService) {
    this.testService
      .getTest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => (this.text = val));
  }

  ngOnInit() {}

  ngOndestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
