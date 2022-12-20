import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { TripComponent } from './trips/trip/trip.component';
import { FormComponent } from './trips/form/form.component'; 
import { BasketComponent } from './trips/basket/basket.component';
import { HistoryComponent } from './trips/history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trip/:id', component: TripComponent },
  { path: 'form', component: FormComponent }, 
  { path: 'basket', component: BasketComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
