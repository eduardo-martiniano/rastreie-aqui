import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckpointComponent } from './components/checkpoint/checkpoint.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "track/:code",
    component: CheckpointComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
