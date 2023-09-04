import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceComponent } from './source/source.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'source',
    pathMatch: 'full',
  },
  {
    path: 'source',
    component: SourceComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
