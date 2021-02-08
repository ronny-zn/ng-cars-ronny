import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from '../shared/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  pageTitle = 'Car New';
  errorMessage: string;
  carForm: FormGroup;

  prodId:number;
  car: Car;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private carService: CarService) {  }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      modelos: '',
      cv: '',
      price: '',
      description: '',
      //shortDescription: '',
      image: ''
    });

    // Read the product Id from the route parameter
    this.prodId = parseInt(this.activatedroute.snapshot.params['carId']);
  }

  saveCar(): void {
    if (this.carForm.valid) {
      if (this.carForm.dirty) {
        this.car = this.carForm.value;
        this.car.id = this.prodId;
        
        this.carService.createCar(this.car)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.carForm.reset();
    this.router.navigate(['']);
  }
  
}
