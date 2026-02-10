import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter {
  counterSignal = signal(0);

  increment() {
    this.counterSignal.update(value => value + 1);
  }

  decrement() {
    this.counterSignal.update(value => value - 1);
  }

  reset() {
    this.counterSignal.set(0);
  }
}
