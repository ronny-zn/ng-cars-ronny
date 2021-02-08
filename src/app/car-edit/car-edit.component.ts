import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Car } from '../shared/car';
import { CarService } from '../shared/car.service';

@Component({
  templateUrl: './car-edit.component.html'
})
export class CarEditComponent implements OnInit{

  pageTitle = 'Car Edit';
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
    this.prodId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getCar(this.prodId);
  }

  getCar(id: number): void {
    this.carService.getCarById(id)
      .subscribe(
        (car: Car) => this.displayCar(car),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayCar(car: Car): void {
    if (this.carForm) {
      this.carForm.reset();
    }
    this.car = car;
    this.pageTitle = `Edit Product: ${this.car.title}`;

    // Update the data on the form
    this.carForm.patchValue({
      title: this.car.title,
      price: this.car.price,
      cv: this.car.cv,
      description: this.car.description,
      //shortDescription: this.car.shortDescription,
      modelos: this.car.modelos,
      image: this.car.image
    });
  }

  deleteCar(): void {
    if (this.car.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the car: ${this.car.title}?`)) {
        this.carService.deleteCar(this.car.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveCar(): void {
    if (this.carForm.valid) {
      if (this.carForm.dirty) {
        this.car = this.carForm.value;
        this.car.id = this.prodId;
        
        this.carService.updateCar(this.car)
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
