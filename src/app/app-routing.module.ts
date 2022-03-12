import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityComponent } from './component/facility/facility.component';
import { HomeComponent } from './component/home/home.component';
import { ResidentComponent } from './component/resident/resident.component';
import { RoomComponent } from './component/room/room.component';

const routes: Routes = [
  {
    path: 'add-room',
    component: RoomComponent
  },
  {
    path: 'add-resident',
    component: ResidentComponent
  },
  {
    path: 'add-facility',
    component: FacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
