import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'feature-selector',
  templateUrl: './feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent implements OnInit {
  // constructor() { }

  ngOnInit(): void {
    return;
  }
}
