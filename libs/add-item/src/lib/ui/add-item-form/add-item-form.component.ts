import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    return;
  }
}
