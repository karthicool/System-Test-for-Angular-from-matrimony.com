import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    RouterModule.forRoot([{ path: 'detail', component: DetailComponent }]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
