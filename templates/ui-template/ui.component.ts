import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-selector',
  templateUrl: './ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    return;
  }
}
