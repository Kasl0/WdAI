import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { TripComponent } from './trips/trip/trip.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component'; 
import { BasketComponent } from './trips/basket/basket.component';
import { HistoryComponent } from './trips/history/history.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trip/:id', component: TripComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] }, 
  { path: 'basket', component: BasketComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private guard: AuthGuard) {}
}
