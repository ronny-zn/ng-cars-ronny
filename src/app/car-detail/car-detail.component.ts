import {Component, OnInit} from '@angular/core';
import {CarService} from '../shared/car.service';
import {Car} from '../shared/car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;
  prodId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private carService: CarService) {}

  ngOnInit() {
    this.prodId = parseInt(this.activatedroute.snapshot.params['carId']);
    this.carService.getCarById(this.prodId).subscribe(
      (data: Car) => this.car = data
    );
  }
  goEdit():void{
    this.router.navigate(['/cars', this.prodId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
