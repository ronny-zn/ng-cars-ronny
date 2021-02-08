import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
  }

  newCar(){
      // Get max product Id from the product list
      this.carService.getMaxCarId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/cars', this.id, 'new'])

  }

}
