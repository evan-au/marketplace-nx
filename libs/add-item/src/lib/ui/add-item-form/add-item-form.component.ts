import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

// Swiper
import Swiper, { Navigation, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  public config: SwiperOptions = {};
  // constructor() {}

  ngOnInit(): void {
    Swiper.use([Navigation]);
  }

  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
