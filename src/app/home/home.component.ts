import {Component, OnInit} from '@angular/core';
import {Car} from '../shared/car';
import {CarService} from '../shared/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[]=[];
  constructor(private carService: CarService) { }

  ngOnInit() {
   this.carService.getCars().subscribe(
    (data: Car[]) => this.cars = data
   );
  }
}
