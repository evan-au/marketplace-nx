import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-item-card',
  templateUrl: './item-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    return;
  }
}
