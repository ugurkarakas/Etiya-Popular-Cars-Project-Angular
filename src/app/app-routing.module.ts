import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StatisticComponent } from './pages/statistic/statistic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'statistic', component: StatisticComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
