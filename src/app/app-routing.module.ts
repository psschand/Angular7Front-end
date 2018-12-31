import { PageNotfoundComponent } from './components/pages/page-notfound/page-notfound.component';
import { PageInfoComponent } from './components/pages/page-info/page-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'info', component: PageInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
