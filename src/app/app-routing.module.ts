import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarNewComponent } from './car-new/car-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'cars/:id/new', component: CarNewComponent},
    {path: 'cars/:carId', component: CarDetailComponent},
    {path: 'cars/:id/edit', component: CarEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
