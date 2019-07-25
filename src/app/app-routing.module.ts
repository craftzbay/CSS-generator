import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from './gradient/gradient.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';

const routes: Routes = [
  { path: '', component: GradientComponent },
  { path: 'gradient', component: GradientComponent },
  { path: 'box-shadow', component: BoxshadowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
