import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './components/track/track.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "track/:code",
    component: TrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
