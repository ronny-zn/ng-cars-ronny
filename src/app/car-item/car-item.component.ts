import {Component, Input} from '@angular/core';
import {Car} from '../shared/car';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent {

  @Input() car: Car;
}
